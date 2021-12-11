import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import SignupClient from './pages/SignupClient'
import SignupStylist from './pages/SignupStylist'
import './styles/style.css'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/signup-client' element={<SignupClient />}/>
          <Route path='/signup-stylist' element={<SignupStylist />}/>
          <Route path='/signin' element={<Login />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

