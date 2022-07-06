import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Profile, Write, About, Settings, Blog, Login, NotFound } from './pages'
import { ToastContainer } from "react-toastify"
import { Loading, ProtectedRoute, Fetching } from "./components"
import { getAuthUser, getThemeFromLocalStorage, simpleTimeNDate } from "./utils/utils"
import { getAllBlogsList } from "./api/blogRequests"
import { infoCustom, successCustom } from './utils/notifications'

export const globalContext = createContext();


function App() {
  const [dark, setDark] = useState(getThemeFromLocalStorage() || false);
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState();
  const [loggedInAs, setLoggedInAs] = useState(getAuthUser());
  const [blogs, setBlogs] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [online, setOnline] = useState(true);

  const fetch = async () => {
    const data = await getAllBlogsList() || [];
    setBlogs(data.map(e => ({ ...e, createdAt: simpleTimeNDate(e.createdAt) })));
  }

  window.ononline = () => {
    setOnline(true);
    console.log("online")
    successCustom("You are online");
    fetch()
  }
  
  window.onoffline = () => {
    setOnline(false);
    console.log("offline")
    infoCustom("You are offline");
  }


  useEffect(() => {
    fetch();
  }, [])

  const context_to_be_sent = {
    userProfile, setUserProfile,
    fetching, setFetching,
    blogs, setBlogs,
    dark, setDark,
    isLoading, setIsLoading,
    loggedInAs, setLoggedInAs,
  };

  return (
    <div className={`${dark ? 'dark-theme' : 'light-theme'} common`}>
      {/* for notification */}
      <ToastContainer theme='dark' />
      {/* loading */}
      {isLoading && <Loading />}
      {/* fetching */}
      {fetching && <Fetching />}
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