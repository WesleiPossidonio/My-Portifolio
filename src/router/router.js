import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { Briefind } from '../Pages/Briefing'
import { Home } from '../Pages/Home'

export const IsRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/briefind" element={<Briefind />} />
      </Routes>
    </Router>
  )
}
