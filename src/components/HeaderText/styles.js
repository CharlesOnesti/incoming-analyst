import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vw 0 0 0;
  @media (max-width: 780px) {
    margin: 30px 0 0 0;
  }
`

export const Header = styled.h1`
  font-family: arial;
  font-size: 48px;
  color: ${props => props.color};
  span {
    color: ${props => props.color2}
  }
  margin-bottom: 0;
  @media (max-width: 780px) {
    font-size: 38px;
  }
`

export const TextContainer = styled.div`
  display: flex;
`
