import React, { useState } from 'react'
import { Main, AnswerBox } from './styles'
import HeaderText from '../../components/HeaderText'
import GButton from '../../components/Button'
import Input from '../../components/Input'


const Quiz = () => {
  const [attempt, setAttempt] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = x => {
    x.preventDefault()
    setSubmitted(true)
  }
  return (
    <Main>
      <HeaderText text="Paper LBO Tool" color1="black" />
      <br />
      <p>
        You are tasked with evaluating an investment opportunity in Company A,
        which has an LTM Revenue of $[LTM_Rev] million and an EBITDA Margin of [EBITDA_margin] percent.
        <br />
        <br />
        Your firm is considering to fund the acquisition with [Debt_percent] percent debt with
        an interest rate of [Int_rate].
        <br />
        <br />
        The management is confident that the firm can acheive a growth of [Rev_growth] per year
        and maintain constant EBITDA margins.
        <br />
        <br />
        The firm has a tax rate of [Tax_rate].
        <br />
        <br />
        Capital Expenditures are equal to [CapEx] percent of the revenue and are equal to
        Depreciation
        <br />
        <br />
        Net Working Capital is [NWC_per] percent of revenue each year
        <br />
        <br />
        What would the IRR of this investment be over a 5 year horizon?
      </p>
      <br />
      <AnswerBox>
        {!submitted ? (
          <>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                value={attempt}
                placeholder="answer"
                onChange={e => setAttempt(e.target.value)}
              />
              <GButton type="submit">Submit</GButton>
            </form>
          </>
        ) : (
          <>
            <p>
              You Geussed:
              {' '}
              {attempt}
            </p>
            <p>The correct answer was BEANS</p>
            <GButton onClick={() => setSubmitted(false)}>Another One</GButton>
          </>
        )}
      </AnswerBox>
    </Main>
  )
}

export default Quiz
