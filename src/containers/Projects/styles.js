import styled from 'styled-components'

export const Main = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 40px;
  position: relative;
  @media (max-width: 780px) {
    margin: 0 auto ;
    display: flex;
    width: 80%;
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
