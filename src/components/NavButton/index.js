import React from 'react'

import { ButtonStyle } from './styles'

const NavButton = ({
  children, onClick, variant, endIcon, ...rest
}) => (
  <ButtonStyle
    variant={variant || 'text'}
    onClick={onClick}
    disableElevation
    endIcon={endIcon}
    {...rest}
  >
    {children}
  </ButtonStyle>
)

export default NavButton
