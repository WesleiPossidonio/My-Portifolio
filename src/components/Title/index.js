import PropTypes from 'prop-types'
import React from 'react'

import { Title } from './style'

export const IsTitle = ({ children, ...rest }) => {
  return <Title {...rest}>{children}</Title>
}

IsTitle.propTypes = {
  children: PropTypes.string
}
