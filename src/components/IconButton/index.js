import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { Container } from './styles'

const IconButton = ({ icon, ...rest }) => {
  return (
    <Container>
      <MaterialIcons name={icon} {...rest}/>
    </Container>
  )
}

export default IconButton