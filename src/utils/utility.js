/* eslint-disable camelcase */
export const generate = () => {
  const entry_mult = Math.floor(Math.random() * (12 - 8 + 1) + 8)
  const ltm_rev = Math.floor(Math.random() * (9 - 1 + 1) + 1) * 100
  const ebitda_margin = Math.floor(Math.random() * (4 - 2 + 1) + 2) * 10
  const debt_percent = Math.floor(Math.random() * (6 - 4 + 1) + 4) * 10
  const int_rate = Math.floor(Math.random() * (2 - 1 + 1) + 1) * 5
  console.log(debt_percent)
  let rev_growth
  if (entry_mult < 15) {
    rev_growth = 5
  } else {
    rev_growth = 10
  }
  const tax_rate = Math.floor(Math.random() * (8 - 4 + 1) + 4) * 5
  const capex_pr = Math.floor(Math.random() * (2 - 1 + 1) + 1) * 5
  const nwc_pr = Math.floor(Math.random() * (2 - 1 + 1) + 1) * 10
  return ({
    entry_mult,
    ltm_rev,
    ebitda_margin,
    debt_percent,
    int_rate,
    rev_growth,
    tax_rate,
    capex_pr,
    nwc_pr,
  })
}

export const solve = ({
  entry_mult,
  ltm_rev,
  ebitda_margin,
  debt_percent,
  int_rate,
  rev_growth,
  tax_rate,
  capex_pr,
  nwc_pr,
}) => {
  const year_array = [0, 1, 2, 3, 4, 5]
  const rev_array = year_array.map(i => ltm_rev * ((1 + rev_growth / 100) ** i))

  const ebitda_array = rev_array.map(a => a * (ebitda_margin / 100))

  const entry_ev = entry_mult * ebitda_array[0]
  const entry_nd = (debt_percent / 100) * entry_ev
  const da_array = rev_array.map(a => -(a * (capex_pr / 100)))

  const ebit_array = ebitda_array.map((a, i) => a + da_array[i])
  const int_array = new Array(6).fill(-((int_rate / 100) * entry_nd))

  const ebt_array = ebit_array.map((a, i) => a + int_array[i])
  const nwc_array = rev_array.map(a => a * (nwc_pr / 100))
  const tax_array = ebt_array.map(a => -(Math.max(a,0) * (tax_rate / 100)))

  const ni_array = ebt_array.map((a, i) => a + tax_array[i])
  const capex_array = rev_array.map(a => -(a * (capex_pr / 100)))
  const nwc_change_array = [0]
  for (let i = 1; i < nwc_array.length; i++) {
    nwc_change_array[i] = nwc_array[i - 1] + nwc_array[i]
  }

  const fcf_array = ni_array.map((a, i) => a + da_array[i] + nwc_change_array[i] + capex_array[i])

  const exit_ev = entry_mult * ebitda_array[5]
  const exit_nd = entry_nd - fcf_array.slice(1, 6).reduce((a, b) => a + b, 0)

  const exit_equity = exit_ev - exit_nd
  const entry_equity = entry_ev - entry_nd

  const mom = exit_equity / entry_equity
  const irr = (mom ** 0.2) - 1

  // console.log('LTM_rev: ', ltm_rev)
  // console.log('rev_array: ', rev_array)
  // console.log('EBITDA_array: ', ebitda_array)
  // console.log('EBIT_array: ', ebit_array)
  // console.log('EBT_array: ', ebt_array)
  // console.log('NI_array: ', ni_array)
  // console.log('DA_array: ', da_array)
  // console.log('CapEx_array: ', capex_array)
  // console.log('nwc_change_array: ', nwc_change_array)
  // console.log('FCF_array: ', fcf_array)
  // console.log('entry_equity: ', entry_equity)
  // console.log('exit_equity: ', exit_equity)
  // console.log('entry_mult: ', entry_mult)

  return {
    irr,
    financials: {
      Revenue: rev_array,
      EBITDA: ebitda_array,
      DA: da_array,
      EBIT: ebit_array,
      Interest: int_array,
      EBT: ebt_array,
      Taxes: tax_array,
      Income: ni_array,
      NegatedDA: da_array.map(a => -a),
      NWC_Change: nwc_change_array,
      Capex: capex_array,
      FCF: fcf_array,
      NWC: nwc_array,
    },
    returns: {
      entry_mult,
      entry_nd,
      exit_nd,
    }
  }
}

export const names = {
  Revenue: 'Revenue',
  EBITDA: 'EBITDA',
  DA: '(-) D&A',
  EBIT: 'EBIT',
  Interest: '(-) Interest',
  EBT: 'EBT',
  Taxes: '(-) Taxes',
  Income: 'Net Income',
  NegatedDA: '(+) D&A',
  NWC_Change: '(-) Increase in NWC',
  Capex: '(-) Capex',
  FCF: 'Free Cash Flow',
  NWC: 'Memo: NWC',
}