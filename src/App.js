import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Profile, Write, About,Settings } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route exact path='/profile' element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
        <Route exact path='/about' element={<ProtectedRoutes><About /></ProtectedRoutes>} />
        <Route exact path='/write' element={<ProtectedRoutes><Write /></ProtectedRoutes>} />
        <Route exact path='/settings' element={<ProtectedRoutes><Settings /></ProtectedRoutes>} />
      </Routes>
    </Router>
  )
}


const ProtectedRoutes = ({ children }) => {
  return children;
}
export default App