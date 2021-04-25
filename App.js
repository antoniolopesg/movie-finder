import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from './src/routes'

import { FavoritesProvider } from './src/hooks/favorites'

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <StackRoutes/>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
