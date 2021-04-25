import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import MovieCard from '../../components/MovieCard'

import { useFavorites } from '../../hooks/favorites'

import {
  Container,
  FavoritesContainer,
  FavoritesList
} from './styles'
import { useEffect } from 'react'

const Favorites = () => {
  const { navigate } = useNavigation()
  const { favorites } = useFavorites()
  return (
    <Container>
      <FavoritesContainer>
        <FavoritesList
          data={favorites}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <MovieCard onPress={() => { navigate('Movie', { id: item.id }) }} movieData={item}/>
          )}
        />
      </FavoritesContainer>
    </Container>
  )
}

export default Favorites