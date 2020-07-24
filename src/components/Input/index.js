import React from 'react'

import { InputStyle } from './styles'

const Input = ({
  value, setValue, label, ...rest
}) => (
  <InputStyle
    value={value}
    onChange={e => setValue(e.target.value)}
    label={label}
    {...rest}
  />
)

export default Input
