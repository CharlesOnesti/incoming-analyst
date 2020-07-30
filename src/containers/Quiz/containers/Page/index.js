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
        percent. Your firm is considering makeing a bid at
        <VariableTag variable={entry_mult} />
        times LTM EBITDA (assume multiple parity for exit) and funding the acquisition with
        <VariableTag variable={debt_percent} />
        percent debt with an interest rate of
        <VariableTag variable={int_rate} />
        percent. The management is confident that the firm can acheive a revenue growth of
        <VariableTag variable={rev_growth} />
        percent per year and maintain constant EBITDA margins. he firm has a tax rate of
        <VariableTag variable={tax_rate} />
        percent. Capital Expenditures are equal to
        <VariableTag variable={capex_pr} />
        percent of the revenue and are equal to Depreciation. Net Working Capital is
        <VariableTag variable={nwc_pr} />
        percent of revenue each year. What would the IRR of this investment be over
        a 5 year horizon?
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
              %
            </p>
            <p>
              The correct answer was
              <VariableTag variable={Math.round(solution * 1000) / 10} />
              %
            </p>
            {Math.abs(attempt - Math.round(solution * 1000) / 10) < 2.5
              ? <p style={{ color: 'green' }}>Great Work!</p>
              : <p style={{ color: 'red' }}>Try again</p>}
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
