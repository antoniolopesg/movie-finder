import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';

import {Container} from './styles';

const IconButton = ({icon, onPress, searching, ...rest}) => {
  return (
    <Container searching={searching} onPress={onPress}>
      <MaterialIcons name={icon} {...rest} />
    </Container>
  );
};

export default IconButton;
