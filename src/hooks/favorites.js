import React, { useContext, useState, createContext, useCallback } from 'react'
import { Alert } from 'react-native'
import * as FileSystem from 'expo-file-system'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'

const FavoritesContext = createContext({})

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = useCallback(async (movie) => {
    const movieToFav = { ...movie }

    if(isFavorite(movieToFav.id)){
      setFavorites(favorites.filter(item => item.id !== movieToFav.id))
      return;
    }

    if(movie.poster){
      try {
        const imageFilename = movieToFav.poster.split('/').pop()
        let fileUri = FileSystem.documentDirectory +  imageFilename;

        const downloadImg = FileSystem.createDownloadResumable(movieToFav.poster, fileUri)
        const response = await downloadImg.downloadAsync()

        const imgBase64 = await FileSystem.readAsStringAsync(response.uri, { encoding: FileSystem.EncodingType.Base64 })
        movieToFav.poster = `data:image/png;base64,${imgBase64}`

      } catch(err){
        Alert.alert('Some problem occurred', 'Sorry, some problem happened when adding the movie to favorites')
        return;
      }
    }
    
    setFavorites(state => [...state, movieToFav])
  },[favorites])

  useEffect(() => {
    async function loadStoragedFavorites() {
      const storagedFavorites = await AsyncStorage.getItem('@MovieFinder:favorites')
      
      if(storagedFavorites) setFavorites(JSON.parse(storagedFavorites))
    }
    loadStoragedFavorites()
  }, [])

  useEffect(() => {
    async function saveFavorites() {
      await AsyncStorage.setItem('@MovieFinder:favorites', JSON.stringify(favorites))
    }
    saveFavorites()
  }, [favorites])

  const isFavorite = (id) => favorites.findIndex(item => item.id === id) >= 0

  const findFavorite = (id) => favorites.find(item => item.id === id)

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, findFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)

  if(!context){
    throw new Error('useFavorites must be within a FavoritesProvider')
  }

  return context
}

export default useFavorites