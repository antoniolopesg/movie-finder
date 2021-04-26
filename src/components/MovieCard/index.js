import React from 'react';

import noImage from '../../assets/no-photo-available-w154.png';

import {Container, Poster, MovieInfo, Title, Rating, Overview} from './styles';

const MovieCard = ({movieData, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Poster
        source={
          movieData.poster
            ? {
                uri: movieData.poster,
              }
            : noImage
        }
        resizeMode="cover"
      />
      <MovieInfo>
        <Title numberOfLines={1}>{movieData.title}</Title>
        <Rating>{movieData.rating.toFixed(1)}</Rating>
        <Overview numberOfLines={4}>{movieData.overview}</Overview>
      </MovieInfo>
    </Container>
  );
};

export default MovieCard;
