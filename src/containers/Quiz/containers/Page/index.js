/* eslint-disable camelcase */
import React, { useState } from 'react'
import { Main, AnswerBox } from './styles'
import HeaderText from '../../../../components/HeaderText'
import GButton from '../../../../components/Button'
import Input from '../../../../components/Input'
import VariableTag from '../../../../components/VariableTag'

const Page = ({
  variables, solution, reset, setReset,
}) => {
  console.log('PAGE')
  const [attempt, setAttempt] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const {
    entry_mult,
    ltm_rev,
    ebitda_margin,
    debt_percent,
    int_rate,
    rev_growth,
    tax_rate,
    capex_pr,
    nwc_pr,
  } = variables || {}
  console.log(entry_mult)
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
        which has an LTM Revenue of $
        <VariableTag variable={ltm_rev} />
        million and an EBITDA Margin of
        <VariableTag variable={ebitda_margin} />
        percent.
        <br />
        <br />
        Your firm is considering to fund the acquisition with
        <VariableTag variable={debt_percent} />
        percent debt with an interest rate of
        <VariableTag variable={int_rate} />
        percent.
        <br />
        <br />
        The management is confident that the firm can acheive a revenue growth of
        <VariableTag variable={rev_growth} />
        percent per year and maintain constant EBITDA margins.
        <br />
        <br />
        The firm has a tax rate of
        <VariableTag variable={tax_rate} />
        percent.
        <br />
        <br />
        Capital Expenditures are equal to
        <VariableTag variable={capex_pr} />
        percent of the revenue and are equal to Depreciation
        <br />
        <br />
        Net Working Capital is
        <VariableTag variable={nwc_pr} />
        percent of revenue each year
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
              <VariableTag variable={attempt} />
            </p>
            <p>
              The correct answer was
              <VariableTag variable={solution} />
            </p>
            <GButton onClick={() => {
              if (reset) {
                setReset(false)
              } else {
                setReset(true)
              }
              setAttempt('')
              return (setSubmitted(false))
            }}
            >
              Another One
            </GButton>
          </>
        )}
      </AnswerBox>
    </Main>
  )
}

export default Page
