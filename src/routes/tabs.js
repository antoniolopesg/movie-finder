import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import BottomBar from '../components/BottomBar'
import Home from '../pages/Home'

const { Navigator, Screen } = createBottomTabNavigator()

const TabRoute = () => (
  <Navigator tabBarOptions={{}} tabBar={props => <BottomBar {...props}/>}>
    <Screen
      name="Home"
      component={Home}
    />
  </Navigator>
)

export default TabRoute