import React from 'react'
import {
  Header, Container,
} from './styles'


const HeaderText = ({
  text, text2, color1, color2,
}) => (
  <Container>
    <Header color={color1} color2={color2}>
      {text}
      {' '}
      {text2 && <span>{text2}</span>}
    </Header>
  </Container>
)

export default HeaderText
