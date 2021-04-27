import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: #fff;
  padding-bottom: ${getBottomSpace()}px;
`;
export const RouteButton = styled(RectButton)`
  flex: 1;
  background-color: #fff;

  justify-content: center;
  align-items: center;

  padding: 10px;
`;

export const RouteText = styled.Text`
  font-weight: 700;
  color: #260c1a;
`;
