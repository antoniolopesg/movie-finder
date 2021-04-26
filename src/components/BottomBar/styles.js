import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 70px;

  width: 100%;

  flex-direction: row;
`;
export const RouteButton = styled(RectButton)`
  flex: 1;
  background-color: #fff;

  justify-content: center;
  align-items: center;
`;

export const RouteText = styled.Text`
  font-weight: 700;
  color: #260c1a;
`;
