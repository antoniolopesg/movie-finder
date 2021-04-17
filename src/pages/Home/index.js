import React, { useCallback, useRef, useState, useEffect } from 'react'
import mapGetMovies from '../../util/mapQueries'
import { getMovies } from '../../graphql/services'

import IconButton from '../../components/IconButton'
import MovieCard from '../../components/MovieCard'

import {
  Container,
  MoviesContainer,
  SearchMovie,
  SearchInput,
  MoviesList
} from './styles'

const Home = () => {
  const moviesListRef = useRef(null)
  const moviesPerRequest = 10

  const [wantedMovie, setWantedMovie] = useState('')

  const [first, setFirst] = useState(moviesPerRequest)
  const [last, setLast] = useState(moviesPerRequest)
  const [totalPage, setTotalPage] = useState(0)
  const [searching, setSearching] = useState(false)

  const [movies, setMovies] = useState([])

  const handleInput = useCallback(value => {
    setWantedMovie(value)
  }, [])

  const handleNextPage = useCallback(() => {
    const moreToFetch = first + moviesPerRequest < totalPage
    const hasSmallestParts = totalPage - first < moviesPerRequest

    if (moreToFetch || hasSmallestParts) {
      if(hasSmallestParts){
        setFirst(totalPage)
        setLast(totalPage - first)
      }
      loadMovies()
    }

    if(hasSmallestParts){
      setFirst(totalPage)
      setLast(totalPage - first)
      loadMovies()
    }
  }, [first, last, totalPage, loadMovies])

  const loadMovies = useCallback(async () => {
    try {
      setSearching(true)
      const response = await getMovies(wantedMovie, first, last)

      const mappedMovies = mapGetMovies(response)

      setMovies(arrayMovies => [...arrayMovies, ...mappedMovies.movies ]);

      setTotalPage(mappedMovies.totalCount)

      setFirst(first + moviesPerRequest)
      setSearching(false)
    } catch (err) {
      console.log(JSON.stringify(err))
    }
  }, [first, wantedMovie, movies, last])

  const handleFirstPage = useCallback(async () => {
    if (movies.length) {
      moviesListRef.current.scrollToIndex({index: 1})
    }
    setMovies([]);
    setFirst(moviesPerRequest);
    setLast(moviesPerRequest);

    loadMovies();
  }, [loadMovies, movies.length, first, last])

  return (
    <Container>
      <MoviesContainer>
        <SearchMovie>
          <SearchInput
            value={wantedMovie}
            placeholder="Which movie do you want to look for?"
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
        <MoviesList 
          ref={moviesListRef}
          data={movies}
          onEndReached={handleNextPage}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <MovieCard movieData={item}/>
          )}
        />
      </MoviesContainer>
    </Container>
  )
}

export default Home