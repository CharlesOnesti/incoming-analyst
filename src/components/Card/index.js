import React from 'react'
import {
  Container, TextContainer, TitleContainer, ImageContainer, Body, Link,
} from './styles'

const Card = ({
  title, text, img, link,
}) => (
  <Container>
    <TitleContainer><Link href={link}>{title}</Link></TitleContainer>
    <hr style={{ width: '50%' }} />
    <Body>

      <a href={link} aria-label={link}><ImageContainer src={img} alt="" /></a>

      <TextContainer>
        {text}
      </TextContainer>
    </Body>
  </Container>
)

export default Card
