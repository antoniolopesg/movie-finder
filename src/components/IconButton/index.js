import React from 'react';
import PropTypes from 'prop-types';
import {MaterialIcons} from '@expo/vector-icons';

import {Container} from './styles';

const IconButton = ({icon, onPress, searching, ...rest}) => {
  return (
    <Container searching={searching} onPress={onPress}>
      <MaterialIcons name={icon} {...rest} />
    </Container>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  searching: PropTypes.bool.isRequired,
};

export default IconButton;
