import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Profile, Write, About, Settings, Blog } from './pages'

function App() {
  return (
    <div className="light-theme common">
      <Router>
        <Routes>
          <Route exact path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
          <Route exact path='/profile' element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
          <Route exact path='/about' element={<ProtectedRoutes><About /></ProtectedRoutes>} />
          <Route exact path='/write' element={<ProtectedRoutes><Write /></ProtectedRoutes>} />
          <Route exact path='/settings' element={<ProtectedRoutes><Settings /></ProtectedRoutes>} />
          <Route exact path='/blog' element={<ProtectedRoutes><Blog /></ProtectedRoutes>} />
        </Routes>
      </Router>
    </div>
  )
}


const ProtectedRoutes = ({ children }) => {
  return children;
}
export default App