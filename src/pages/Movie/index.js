import React, {useEffect, useState, useCallback} from 'react'

import {ScrollView, View} from 'react-native'

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

const Movie = ({route, navigation}) => {
  const {id} = route.params

  const [movie, setMovie] = useState({})

  useEffect(() => {
    loadMovie()
  }, [loadMovie])

  const loadMovie = useCallback(async () => {
    try {
      const response = await getMovie(id)
      setMovie(response.movies.movie.details)
    } catch (err) {
      console.log(err)
    }
  }, [id])

  const goBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  return (
    <Container>
      <TopBar>
        <GoBack onPress={goBack}>
          <Icon name="arrow-back" size={32} color="#260c1a" />
        </GoBack>

        <AddToFav>
          <Icon name="favorite-border" size={32} color="#260c1a" />
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
