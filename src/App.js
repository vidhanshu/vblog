import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Profile, Write, About, Settings, Blog } from './pages'
export const globalContext = createContext()
function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={`${dark ? 'dark-theme' : 'light-theme'} common`}>
      <Router>
        <globalContext.Provider value={{ setDark, dark }}>
          <Routes>
            <Route exact path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
            <Route exact path='/profile' element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
            <Route exact path='/about' element={<ProtectedRoutes><About /></ProtectedRoutes>} />
            <Route exact path='/write' element={<ProtectedRoutes><Write /></ProtectedRoutes>} />
            <Route exact path='/settings' element={<ProtectedRoutes><Settings /></ProtectedRoutes>} />
            <Route exact path='/blog' element={<ProtectedRoutes><Blog /></ProtectedRoutes>} />
          </Routes>
        </globalContext.Provider>
      </Router>
    </div>
  )
}


const ProtectedRoutes = ({ children }) => {
  return children;
}
export default App