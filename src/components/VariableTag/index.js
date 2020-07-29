import React from 'react'
import { VariableTagStyle } from './styles'

const VariableTag = ({ variable }) => (
  <VariableTagStyle>
    {' '}
    {variable}
    {' '}
  </VariableTagStyle>
)

export default VariableTag
