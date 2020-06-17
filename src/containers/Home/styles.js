import styled from 'styled-components'

export const Main = styled.div`
  width: 70%;
  display: flex;
  margin: 0vh 15vw 0 15vw;
  position: relative;
  @media (max-width: 780px) {
    margin: 0 0 0 0;
    display: inline-block;
    justify-items: center;
    width: 80%;
  }
`

export const ImageContainer = styled.div`
  width: 200px;
  height: 320px;
  margin: 30px;
  position: relative;
  @media (max-width: 780px) {
    width: 100%;
    margin: 30px 0 0 0;
  }
`

export const TextBox = styled.div`
  width: 100%;
  height: 320px;
  margin: 30px 30px 30px 0px;
  position: relative;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
`
