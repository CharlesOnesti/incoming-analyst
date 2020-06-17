import React from 'react'
import { styled } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export const ButtonStyle = styled(({ ...rest }) => <Button {...rest} />)({
  width: props => (props.width || '316px'),
  height: props => (props.height || '55px'),
  borderRadius: props => (props.noBorderRadius ? '0px' : '4px'),
  fontSize: '17px',
  textTransform: 'none',
  ['@media (max-width:750px)']: { // eslint-disable-line no-useless-computed-key
    fontSize: '12px',
  },
})
