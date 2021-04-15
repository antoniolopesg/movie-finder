import React from 'react'

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
  const movies = [
    {
      "id": 299534,
      "title": "Avengers: Endgame",
      "rating": 8.3,
      "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      "poster": "https://image.tmdb.org/t/p/w154/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg"
    },
    {
      "id": 24428,
      "title": "The Avengers",
      "rating": 7.7,
      "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
      "poster": "https://image.tmdb.org/t/p/w154/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
    },
    {
      "id": 299536,
      "title": "Avengers: Infinity War",
      "rating": 8.3,
      "poster": "https://image.tmdb.org/t/p/w154/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain."
    },
    {
      "id": 99861,
      "title": "Avengers: Age of Ultron",
      "rating": 7.3,
      "poster": "https://image.tmdb.org/t/p/w154/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
      "overview": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure."
    },
    {
      "id": 9320,
      "title": "The Avengers",
      "poster": "https://image.tmdb.org/t/p/w154/1p5thyQ4pCy876HpdvFARqJ62N9.jpg",
      "overview": "British Ministry agent John Steed, under direction from \"Mother\", investigates a diabolical plot by arch-villain Sir August de Wynter to rule the world with his weather control machine. Steed investigates the beautiful Doctor Mrs. Emma Peel, the only suspect, but simultaneously falls for her and joins forces with her to combat Sir August.",
      "rating": 4.4
    },
    {
      "id": 323660,
      "title": "Avengers Grimm",
      "poster": "https://image.tmdb.org/t/p/w154/1SbBKCbnULACOqWKN7eLfTu1gVm.jpg",
      "overview": "When Rumpelstiltskin destroys the Magic Mirror and escapes to the modern world, the four princesses of \"Once Upon a Time\"-Cinderella, Sleeping Beauty, Snow White, and Rapunzel-are sucked through the portal too. Well-trained and endowed with magical powers, the four women must fight Rumpelstiltskin and his army of thralls before he enslaves everyone on Earth.",
      "rating": 4.2
    },
  ]

  return (
    <Container>
      <MoviesContainer>
        <SearchMovie>
          <SearchInput
            placeholder="Which movie do you want to look for?"
          />
          <IconButton
            icon="search"
            color="#fff"
            size={32}
          />
        </SearchMovie>
        <MoviesList 
          data={movies}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <MovieCard movieData={item}/>
          )}
        />
      </MoviesContainer>
    </Container>
  )
}

export default Home