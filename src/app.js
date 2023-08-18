import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { IsRouter } from './router/router'
import GlobalStyle from './style/GlobalStyle'

export const App = () => {
  return (
    <>
      <ToastContainer theme="dark" />
      <GlobalStyle />
      <IsRouter />
    </>
  )
}
