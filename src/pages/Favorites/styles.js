import styled from 'styled-components/native';

import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  background-color: #260c1a;
  flex: 1;
  padding: 16px;
`;

export const FavoritesContainer = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
`;

export const FavoritesList = styled.FlatList`
  flex: 1;
`;

export const EmptyFavoritesContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  color: #aaa;
  width: 100%;
  font-size: 35px;
  font-weight: 700;
  max-width: 400px;
  text-align: center;
`;
