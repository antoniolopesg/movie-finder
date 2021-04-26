import styled, {css} from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: #260c1a;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 8px;

  ${props =>
    props.searching &&
    css`
      background-color: #999;
    `}
`;
