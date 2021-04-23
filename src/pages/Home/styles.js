import styled from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  background-color: #260c1a;
  flex: 1;
  padding: 16px;
`

export const MoviesContainer = styled.View`
  background-color: #fff;
  border-radius: 8px;
  flex: 1;
  padding: 8px;
`;

export const SearchMovie = styled.View`
  border-width: 1px;
  border-color: #ccc;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  margin-bottom: 8px;
`;

export const SearchInput = styled.TextInput`
  font-size: 18px;
  padding: 8px;
  color: #000;
  flex: 1;
`;

export const MoviesList = styled.FlatList`
  flex: 1;
`
export const EmptyMoviesContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const EmptyText = styled.Text`
  color: #aaa;
  font-size: 35px;
  font-weight: 700;
  max-width: 200px;
  text-align: center;
`