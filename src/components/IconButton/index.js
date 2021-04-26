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

<<<<<<< HEAD
IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  searching: PropTypes.bool.isRequired,
};

=======
>>>>>>> fded401163905d2d680c54f8b9189029f90b0fa7
export default IconButton;
