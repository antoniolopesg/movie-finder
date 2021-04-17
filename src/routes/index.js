import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'

const { Navigator, Screen } = createStackNavigator()

const StackRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home}/>
  </Navigator>
)

export default StackRoutes