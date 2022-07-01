import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Profile, Write, About, Settings, Blog, Login, NotFound } from './pages'
import { ToastContainer } from "react-toastify"
import { Loading, OnOffLine, ProtectedRoute } from "./components"
import { getAuthUser, getThemeFromLocalStorage } from "./utils/utils"
import { getAllBlogs } from "./api/blogRequests"

export const globalContext = createContext();


function App() {
  const [dark, setDark] = useState(getThemeFromLocalStorage() || false);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedInAs, setLoggedInAs] = useState(getAuthUser());
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  const [blogs, setBlogs] = useState([]);

  window.ononline = () => {
    setIsOnline(true);
  }

  useEffect(() => {
    const fetch = async () => {
      setBlogs(await getAllBlogs());
    }
    fetch();
  }, [isOnline])

  const context_to_be_sent = { blogs, setBlogs, dark, setDark, isLoading, setIsLoading, loggedInAs, setLoggedInAs, isOnline, setIsOnline };

  return (
    <div className={`${dark ? 'dark-theme' : 'light-theme'} common`}>
      {/* for notification */}
      <ToastContainer theme='dark' />
      {/* loading */}
      {isLoading && <Loading />}
      {/* online offline */}
      {!isOnline && <OnOffLine />}
      <Router>
        <globalContext.Provider value={context_to_be_sent}>
          <Routes>
            <Route exact path='/auth' element={<Login />} />
            <Route exact path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route exact path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route exact path='/about' element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route exact path='/write' element={<ProtectedRoute><Write /></ProtectedRoute>} />
            <Route exact path='/settings' element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route exact path='/blog/:id' element={<ProtectedRoute><Blog /></ProtectedRoute>} />
            <Route path='*' element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
          </Routes>
        </globalContext.Provider>
      </Router>
    </div>
  )
}


export default React.memo(App);