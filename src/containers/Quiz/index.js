import React, { useState } from 'react'
import { Main } from './styles'
import HeaderText from '../../components/HeaderText'

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

      {!submitted ? (
        <>
          <p>
            You are tasked with evaluating an investment opportunity in Company A,
            which has an LTM Revenue of [LTM_Rev] and an EBITDA Margin of [EBITDA_margin] percent.

            Your firm is considering to fund the acquisition with [Debt_percent] percent debt with
            an interest rate of [Int_rate].

            The management is confident that the firm can acheive a growth of [Rev_growth] per year
            and maintain constant EBITDA margins.

            The firm has a tax rate of [Tax_rate].

            Capital Expenditures are equal to 10 percent of the revenue and are equal to
            Depreciation

            Net Working Capital is [NWC_per] percent of revenue each year

            What would the IRR of this investment be over a 5 year horizon?
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={attempt}
              placeholder="answer"
              onChange={e => setAttempt(e.target.value)}
            />
            <input type="submit" value="Submit" />
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
          <button type="button" onClick={() => setSubmitted(false)}>Another One</button>
        </>
      )}
    </Main>
  )
}

export default Quiz
