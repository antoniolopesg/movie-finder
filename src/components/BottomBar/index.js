import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import { Container, RouteButton, RouteText } from './styles'

const BottomBar = () => {
  return (
    <Container>
      <RouteButton>
        <Icon name="home" size={32} color="#666"/>
        <RouteText>Home</RouteText>
      </RouteButton>
      <RouteButton>
        <Icon name="heart" size={32} color="#666"/>
        <RouteText>Favorite</RouteText>
      </RouteButton>
    </Container>
  )
}

export default BottomBar