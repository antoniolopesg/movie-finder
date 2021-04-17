import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const TopBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 13px;
`;

export const GoBack = styled(TouchableOpacity)``;

export const AddToFav = styled(TouchableOpacity)``;

export const MovieContainer = styled.View`
  flex: 1;
  margin-top: 25px;
  padding: 6px 16px;
`;

export const Poster = styled.Image`
  width: 100%;
  height: 400px;
`;

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  margin-top: 8px;
  color: #260c1a;
`;

export const Rating = styled.Text`
  font-size: 16px;
  margin-left: 4px;
  font-weight: bold;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Overview = styled.Text`
  font-size: 18px;
  text-align: justify;
  margin-top: 12px;
`;
