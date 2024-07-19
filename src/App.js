import React from 'react'
import './styles/default.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Catalog from './pages/catalog'
import Home from './pages/home'
import Profile from './pages/profile'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App