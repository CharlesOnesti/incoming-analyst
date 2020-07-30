import React from 'react'
import { useHistory } from 'react-router-dom'
import HeaderText from '../../components/HeaderText'
import { WelcomeParagraph } from './styles'
import Gbutton from '../../components/Button'


const Home = () => {
  const history = useHistory()
  return (
    <>
      <HeaderText text="Paper LBO Tool" color1="black" />
      <WelcomeParagraph>
        <br />
        When you are ready to begin, press the button below to generate a paper LBO prompt.
      </WelcomeParagraph>
      <br />
      <WelcomeParagraph>
        This exercise is meant to be done with pen and paper and no calculator.
      </WelcomeParagraph>
      <br />
      <WelcomeParagraph>
        When you are finished, click the Show Answer button to check your work!
      </WelcomeParagraph>
      <Gbutton onClick={() => history.push('/quiz')}>START</Gbutton>
    </>
  )
}

export default Home
