import styled from 'styled-components/native'

export const Container = styled.View`
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