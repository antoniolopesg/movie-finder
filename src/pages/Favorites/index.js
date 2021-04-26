import React from 'react'
import { useNavigation } from '@react-navigation/core'
import MovieCard from '../../components/MovieCard'

import { useFavorites } from '../../hooks/favorites'

import {
  Container,
  FavoritesContainer,
  FavoritesList,
  EmptyFavoritesContainer,
  EmptyText
} from './styles'

const Favorites = () => {
  const { navigate } = useNavigation()
  const { favorites } = useFavorites()
  return (
    <Container>
      <FavoritesContainer>
        {favorites.length ? (
            <FavoritesList
            data={favorites}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <MovieCard onPress={() => { navigate('Movie', { id: item.id }) }} movieData={item}/>
            )}
          />
        ):(
          <EmptyFavoritesContainer>
            <EmptyText>Try adding some movies to favorites :)</EmptyText>
          </EmptyFavoritesContainer>
        )}
      </FavoritesContainer>
    </Container>
  )
}

export default Favorites