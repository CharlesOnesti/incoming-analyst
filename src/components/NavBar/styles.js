import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #470B2D;
  display: flex;
  align-items: center;
  text-align: right;
  justify-content: space-between;
  height: 60px;
  padding: 0 10% 0 10%;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 1);
  position: relative;
  @media (max-width: 750px) {
    height: 50px;
    padding: 0 5vw 0 5vw;
  }
`

export const HStack = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  width: 200px;
  height: 43px;
  @media (max-width: 750px) {
    display: none;
  }
`
