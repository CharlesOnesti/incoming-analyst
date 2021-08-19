/* eslint-disable camelcase */
import React, { useState } from 'react'
import { Main, AnswerBox, BodyPara, StyledTable } from './styles'
import HeaderText from '../../../../components/HeaderText'
import GButton from '../../../../components/Button'
import Input from '../../../../components/Input'
import VariableTag from '../../../../components/VariableTag'
import Timer from '../../../../components/Timer'
import { names } from '../../../../utils/utility'

const Page = ({
  variables, data, reset, setReset,
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
  const text = `You are tasked with evaluating an investment opportunity in Company A,
  which has an LTM Revenue of $${ltm_rev} million and an EBITDA margin of
  ${ebitda_margin}%. Your firm is considering making a bid at
  ${entry_mult} times LTM EBITDA (assume multiple parity for exit) and funding the acquisition with
  ${debt_percent}%  debt with an interest rate of
  ${int_rate}%. The management is confident that the firm can acheive a revenue growth of
  ${rev_growth}% per year and maintain constant EBITDA margins. The firm has a tax rate of
  ${tax_rate}%. Capital Expenditures are equal to
  ${capex_pr}% of the revenue and are equal to Depreciation. Net Working Capital is
  ${nwc_pr}% of revenue each year. What would the IRR of this investment be over
  a 5 year horizon?`
  return (
    <Main>
      <HeaderText text="Paper LBO Tool" color1="black" />
      <br />
      <BodyPara>
        {text}
      </BodyPara>
      <br />
      <Timer submitted={submitted} reset={reset} setReset={setReset} />
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
              You Guessed:
              <VariableTag variable={attempt} />
              %
            </p>
            <p>
              The correct answer was
              <VariableTag variable={Math.round(data.irr * 1000) / 10} />
              %
            </p>
            {Math.abs(attempt - Math.round(data.irr * 1000) / 10) < 2.5
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
            <StyledTable>
            <thead>
                <tr>
                  <td>
                  </td>
                  <td>
                    Enter
                  </td>
                  <td>
                    Exit
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr><td>LTM EBITDA</td><td>{Math.round(data.financials.EBITDA[0])}</td><td>{Math.round(data.financials.EBITDA[5])}</td></tr>
                <tr><td>(x) EBITDA Multiple</td><td>{`${data.returns.entry_mult}x`}</td><td>{`${data.returns.entry_mult}x`}</td></tr>
                <tr><td>Enterprise Value</td><td>{Math.round(data.financials.EBITDA[0] * data.returns.entry_mult)}</td><td>{Math.round(data.financials.EBITDA[5] * data.returns.entry_mult)}</td></tr>
                <tr><td>(-) Net Debt</td><td>{-Math.round(data.returns.entry_nd)}</td><td>{-Math.round(data.returns.exit_nd)}</td></tr>
                <tr><td>Equity Value</td><td>{Math.round((data.financials.EBITDA[0] * data.returns.entry_mult - data.returns.entry_nd))}</td><td>{Math.round((data.financials.EBITDA[5] * data.returns.entry_mult - data.returns.exit_nd))}</td></tr>
              </tbody>
            </StyledTable>
            <StyledTable>
              <thead>
                <tr>
                <td>
                  </td>
                  <td>
                    Year 0
                  </td>
                  <td>
                    Year 1
                  </td>
                  <td>
                    Year 2
                  </td>
                  <td>
                    Year 3
                  </td>
                  <td>
                    Year 4
                  </td>
                  <td>
                    Year 5
                  </td>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data.financials).map(x => 
                  <tr key={x}>
                    <td>{names[x]}</td>
                    {data.financials[x].map((a, i) => {
                      console.log(i, x)
                        if ((i === 0 && !(x == 'Revenue' || x === 'EBITDA'))) {return (<td/>)}
                        else {return(<td>{Math.round(a)}</td>)}
                      })}
                  </tr>
                )}
              </tbody>
            </StyledTable>
            <div style={{height: 100}} />
          </>
        )}
      </AnswerBox>
    </Main>
  )
}

export default Page
