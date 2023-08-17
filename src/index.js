import React from 'react'
import ReactDOM from 'react-dom/client'

import { IsRouter } from './router/router'
import GlobalStyle from './style/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <GlobalStyle />
    <IsRouter />
  </>
)
