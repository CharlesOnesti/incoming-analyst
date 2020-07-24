import React from 'react'
import { ButtonStyle } from './styles'

const Gbutton = ({ children, onClick }) => (
  <ButtonStyle onClick={onClick}>
    {children}
  </ButtonStyle>
)

export default Gbutton
