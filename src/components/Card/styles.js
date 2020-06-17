import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: inline;
  margin: 15px;
  @media (max-width: 700px) {
  }
`

export const TextContainer = styled.div`
  display: flex;
  max-width: 200px;
  margin: 20px 30px 40px 0px;
  text-align: left;
  line-height: 1.2;
`

export const Body = styled.div`
  display: inline-flex;
`

export const TitleContainer = styled.div`
  margin-top: 5%;
  display: inline-block;
  font-size: 22px;
  text-align: center;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
`

export const ImageContainer = styled.img`
  display: flex;
  width: 20vw;
  max-width: 200px;
  height: auto;

`

export const Link = styled.a`
  color: black;
  text-decoration: none;
`
