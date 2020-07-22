import React from 'react'
import HeaderText from '../../components/HeaderText'
import WelcomeParagraph from './styles'


const Home = () => {
  console.log('home rendered')
  return (
    <>
      <HeaderText text="Coming Soon" color1="black" />
      <WelcomeParagraph>
        "Hello World"
      </WelcomeParagraph>
    </>
  )
}

export default Home
