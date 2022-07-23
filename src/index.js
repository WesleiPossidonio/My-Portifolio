import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './Pages'
import GlobalStyle from './style/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <GlobalStyle />
    <Home />
  </>
)
