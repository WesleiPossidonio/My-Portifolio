import PropTypes from 'prop-types'
import React from 'react'

import { IsButton } from './style'
export const Button = ({ children, ...rest }) => {
  return <IsButton {...rest}>{children}</IsButton>
}

Button.propTypes = {
  children: PropTypes.node
}
