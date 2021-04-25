import React, {useEffect, useState, useCallback} from 'react'
import { useNavigation } from '@react-navigation/native'
import {Alert, ScrollView, View} from 'react-native'
import { MaterialIcons as Icon } from '@expo/vector-icons'

import {getMovie} from '../../graphql/services'
import noImage from '../../assets/no-photo-available-w500.png'

import {
  Container,
  TopBar,
  GoBack,
  AddToFav,
  MovieContainer,
  Title,
  Poster,
  Overview,
  RatingContainer,
  Rating,
} from './styles'
import { useFavorites } from '../../hooks/favorites'

const Movie = ({route, navigation}) => {
  const { goBack } = useNavigation()
  const { toggleFavorite, isFavorite } = useFavorites()
  const { id } = route.params
  const [movie, setMovie] = useState({})

  useEffect(() => {
    loadMovie()
  }, [loadMovie])

  const loadMovie = useCallback(async () => {
    try {
      const response = await getMovie(id)
      setMovie(response.movies.movie.details)
    } catch (err) {
      Alert
        .alert('Some problem occurred', 'Check your connection, if the problem persists we apologize')
      goBack()
    }
  }, [id])

  return (
    <Container>
      <TopBar>
        <GoBack onPress={goBack}>
          <Icon name="arrow-back" size={32} color="#260c1a" />
        </GoBack>

        <AddToFav onPress={() => toggleFavorite({ id,...movie })}>
          <Icon name={isFavorite(id) ? "favorite" : "favorite-border"} size={32} color="#260c1a" />
        </AddToFav>
      </TopBar>
      <ScrollView>
        <View>
          <MovieContainer>
            <Poster
              source={movie.poster ? {
                uri: movie.poster,
              }:noImage}
              resizeMode="contain"
            />

            <Title>{movie.title}</Title>

            <RatingContainer>
              <Icon name="star" size={20} color="#d0a20d" />
              <Rating>{movie.rating}</Rating>
            </RatingContainer>

            <Overview>{movie.overview}</Overview>
          </MovieContainer>
        </View>
      </ScrollView>
    </Container>
  )
}

export default Movie
