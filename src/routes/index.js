import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Movie from '../pages/Movie';
import TabRoute from './tabs';

const {Navigator, Screen} = createStackNavigator();

const StackRoutes = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name="MainTab" component={TabRoute} />
    <Screen name="Movie" component={Movie} />
  </Navigator>
);

export default StackRoutes;
