import React from 'react'
import styled from 'glamorous'
import PowerIcon from '../icons/PowerIcon'

const PowerButton = props =>
  <Button {...props}>
    <PowerIcon color="#999" />
  </Button>
// @todo rename this to avoid confusion with colored game buttons
const Button = styled.button({
  width: 36,
  height: 36,
  padding: 8,
  borderRadius: '50%',
  background: 'rgba(255,255,255,0)',
  border: 'solid 1px rgba(255,255,255,0.1)',
  boxShadow: 'none',
  margin: '1vmin 0',
  [':active']: {
    background: 'rgba(255,255,255,0.3)'
  }
})

export default PowerButton
