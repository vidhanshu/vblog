import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Profile, Write, About, Settings, Blog, Login } from './pages'
import { Loading } from "./components"
export const globalContext = createContext()
function App() {
  const [dark, setDark] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIntAs, setLoggedInAs] = useState({});

  const context_to_be_sent = { dark, setDark, isLoading, setIsLoading, loggedIntAs, setLoggedInAs };

  return (
    <div className={`${dark ? 'dark-theme' : 'light-theme'} common`}>
      {isLoading && <Loading />}
      <Router>
        <globalContext.Provider value={context_to_be_sent}>
          <Routes>
            <Route exact path='/auth' element={<ProtectedRoutes><Login /></ProtectedRoutes>} />
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