import React from 'react'
import { styled } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

export const InputStyle = styled(({ ...rest }) => <TextField {...rest} />)({
  marginTop: '20px',
  width: '300px',
  height: '50px',
  fontFamily: 'Gilroy',
  fontWeight: 'normal',
})
