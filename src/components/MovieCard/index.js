import React from 'react'

import {
  Container,
  Poster,
  MovieInfo,
  Title,
  Rating,
  Overview
} from './styles';

const MovieCard = ({ movieData }) => {
  return (
    <Container>
      <Poster
        source={{
          uri: movieData.poster,
        }}
        resizeMode="contain"
      />
      <MovieInfo>
        <Title numberOfLines={1}>{movieData.title}</Title>
        <Rating>{movieData.rating}</Rating>
        <Overview numberOfLines={4}>{movieData.overview}</Overview>
      </MovieInfo>
    </Container>
  )
}

export default MovieCard