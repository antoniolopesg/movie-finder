import React, { useRef, useState } from 'react'
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

const moviesPerRequest = 10

const Home = () => {
  const first = useRef(moviesPerRequest)
  const last = useRef(moviesPerRequest)

  const [wantedMovie, setWantedMovie] = useState('')
  const [totalPage, setTotalPage] = useState(0)
  const [searching, setSearching] = useState(false)
  const [movies, setMovies] = useState([])

  const moviesListRef = useRef(null)

  const handleInput = value => setWantedMovie(value)

  const loadMovies = async () => {
    try {
      setSearching(true)
      const response = await getMovies(wantedMovie, first.current, last.current)

      const mappedMovies = mapGetMovies(response)

      setMovies(arrayMovies => [...arrayMovies, ...mappedMovies.movies ])

      setTotalPage(mappedMovies.totalCount)

      first.current = first.current + moviesPerRequest

      setSearching(false)
    } catch (err) {
      console.log(JSON.stringify(err))
    }
  }

  const handleFirstPage = async () => {
    if (movies.length) {
      moviesListRef.current.scrollToIndex({index: 1})
    }

    first.current = moviesPerRequest
    last.current = moviesPerRequest
  
    setMovies([])

    await loadMovies()
  }

  const handleNextPage = async () => {
    const moreToFetch = first.current + moviesPerRequest < totalPage
    const hasSmallestParts = totalPage - first.current < moviesPerRequest
    
    if (moreToFetch || hasSmallestParts) {
      if(hasSmallestParts){
        const backupFirst = first.current
        first.current += totalPage
        last.current = totalPage - backupFirst

        console.log(first.current, last.current)
      }
    
      await loadMovies()
    }
  }


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
          onEndReachedThreshold={0.1}
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