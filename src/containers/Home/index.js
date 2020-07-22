import React from 'react'
import HeaderText from '../../components/HeaderText'
import {WelcomeParagraph} from './styles'


const Home = () => {
  console.log('home rendered')
  return (
    <>
      <HeaderText text="Paper LBO Tool" color1="black" />
      <WelcomeParagraph>
      <br></br>
        When you are ready to begin, press the button below to generate a paper LBO prompt.
      </WelcomeParagraph>
      <br></br>
      <WelcomeParagraph>
        This exercise is meant to be done with pen and paper and no calculator.
      </WelcomeParagraph>
      <br></br>
      <WelcomeParagraph>
        When you are finished, click the button "Show Answer" to check your work!
      </WelcomeParagraph>
    </>
  )
}

export default Home
