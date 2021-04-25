import React, { useContext, useState, createContext, useCallback } from 'react'
import * as FileSystem from 'expo-file-system'

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
        console.log(err)
      }
    }

    setFavorites(state => [...state, movieToFav])
  },[favorites])

  const isFavorite = (id) => favorites.findIndex(item => item.id === id) >= 0

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
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