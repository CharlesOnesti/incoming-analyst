import React, { useState } from 'react'
import Page from './containers/Page'

import { generate, solve } from '../../utils/utility'


const Quiz = () => {
  const [reset, setReset] = useState(false)
  const variables = generate()
  return (
    <Page
      variables={variables}
      data={solve(variables)}
      reset={reset}
      setReset={setReset}
    />
  )
}

export default Quiz
