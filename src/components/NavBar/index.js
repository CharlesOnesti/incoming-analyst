import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, HStack } from './styles'
import NavButton from '../NavButton'

const NavBar = () => {
  const history = useHistory()
  return (
    <Container>
      <HStack>
        <NavButton
          width="15vw"
          height="60px"
          onClick={() => history.push('/')}
          noBorderRadius
        >
          <p style={{ color: 'white', fontFamily: '' }}>Charles Onesti</p>
        </NavButton>
      </HStack>
      <HStack>
        <NavButton
          width="10vw"
          height="60px"
          onClick={() => history.push('/')}
          noBorderRadius
        >
          <p style={{ color: 'white' }}>Home</p>
        </NavButton>
        <NavButton
          width="10vw"
          height="60px"
          onClick={() => history.push('/projects')}
          noBorderRadius
        >
          <p style={{ color: 'white' }}>Projects</p>
        </NavButton>
        <NavButton
          width="10vw"
          height="60px"
          onClick={() => history.push('/contact')}
          noBorderRadius
        >
          <p style={{ color: 'white' }}>Contact</p>
        </NavButton>
      </HStack>

    </Container>
  )
}

export default NavBar
