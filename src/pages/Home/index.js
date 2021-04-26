import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

import mapGetMovies from '../../util/mapQueries';
import {getMovies} from '../../graphql/services';

import IconButton from '../../components/IconButton';
import MovieCard from '../../components/MovieCard';

import {
  Container,
  MoviesContainer,
  SearchMovie,
  SearchInput,
  MoviesList,
  EmptyMoviesContainer,
  EmptyText,
} from './styles';

const moviesPerRequest = 10;

const Home = () => {
  const {navigate} = useNavigation();

  const first = useRef(moviesPerRequest);
  const last = useRef(moviesPerRequest);

  const [wantedMovie, setWantedMovie] = useState('');
  const [totalPage, setTotalPage] = useState(0);
  const [searching, setSearching] = useState(false);
  const [movies, setMovies] = useState([]);

  const moviesListRef = useRef(null);

  const handleInput = value => setWantedMovie(value);

  const loadMovies = async () => {
    try {
      setSearching(true);
      const response = await getMovies(
        wantedMovie,
        first.current,
        last.current
      );

      const mappedMovies = mapGetMovies(response);

      setMovies(arrayMovies => [...arrayMovies, ...mappedMovies.movies]);

      setTotalPage(mappedMovies.totalCount);

      first.current = first.current + moviesPerRequest;
    } catch (err) {
      Alert.alert(
        'Some problem occurred',
        'Some problem happened while fetching movies, check your connection, if the problem persists we apologize.'
      );
    }

    setSearching(false);
  };

  const handleFirstPage = async () => {
    if (movies.length) {
      moviesListRef.current.scrollToIndex({index: 1});
    }

    first.current = moviesPerRequest;
    last.current = moviesPerRequest;

    setMovies([]);

    await loadMovies();
  };

  const handleNextPage = async () => {
    const moreToFetch = first.current + moviesPerRequest < totalPage;
    const hasSmallestParts = totalPage - first.current < moviesPerRequest;

    if (moreToFetch || hasSmallestParts) {
      if (hasSmallestParts) {
        const backupFirst = first.current;
        first.current += totalPage;
        last.current = totalPage - backupFirst;
      }

      await loadMovies();
    }
  };

  return (
    <Container>
      <MoviesContainer>
        <SearchMovie>
          <SearchInput
            value={wantedMovie}
            placeholder="Enter a movie name..."
            onChangeText={handleInput}
          />
          <IconButton
            icon="search"
            color="#fff"
            size={32}
            searching={searching}
            onPress={handleFirstPage}
          />
        </SearchMovie>
        {movies.length ? (
          <MoviesList
            ref={moviesListRef}
            data={movies}
            onEndReached={handleNextPage}
            onEndReachedThreshold={0.1}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <MovieCard
                onPress={() => {
                  navigate('Movie', {id: item.id});
                }}
                movieData={item}
              />
            )}
          />
        ) : (
          <EmptyMoviesContainer>
            <EmptyText>Try searching for some film</EmptyText>
          </EmptyMoviesContainer>
        )}
      </MoviesContainer>
    </Container>
  );
};

export default Home;
