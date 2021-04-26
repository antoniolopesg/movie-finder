import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 150px;
  width: 100%;
  flex-direction: row;
`;

export const Poster = styled.Image`
  width: 92px;
  height: 100%;
`;
export const MovieInfo = styled.View`
  height: 100%;
  width: 92px;
  padding: 0px 8px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;

export const Overview = styled.Text`
  font-size: 16px;
  margin-top: auto;
`;

export const Rating = styled.Text`
  font-size: 18px;
  margin-top: 4px;
`;
