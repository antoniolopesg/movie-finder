import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import Movie from '../pages/Movie'

const { Navigator, Screen } = createStackNavigator()

const StackRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home}/>
    <Screen name="Movie" component={Movie}/>
  </Navigator>
)

export default StackRoutes