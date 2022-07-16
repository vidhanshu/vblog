import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getAllBlogsList } from "./api/blogRequests";
import { Fetching, Loading, ProtectedRoute } from "./components";
import { About, Blog, Home, Login, NotFound, Profile, Settings, Write } from "./pages";
import { infoCustom, successCustom } from "./utils/notifications";
import { getAuthUser, getThemeFromLocalStorage, simpleTimeNDate } from "./utils/utils";

export const globalContext = createContext();


function App() {
  //dark mode state - taking from localStorage
  const [dark, setDark] = useState(getThemeFromLocalStorage() || false);
  //loading state - throughout the app
  const [isLoading, setIsLoading] = useState(false);
  //user state - throughout the app
  const [userProfile, setUserProfile] = useState({});
  //login user state - throughout the app
  const [loggedInAs, setLoggedInAs] = useState(getAuthUser());
  //blog list state -throughout home page
  const [blogs, setBlogs] = useState([]);
  //fetching state- indicates fetching of blogs
  const [fetching, setFetching] = useState(false);

  const fetch = async () => {
    const data = await getAllBlogsList() || [];
    setBlogs(data.map(e => ({ ...e, createdAt: simpleTimeNDate(e.createdAt) })));
  }

  //for automatic fetching of blogs on online
  window.ononline = () => {
    successCustom("You are online");
    fetch()
  }

  window.onoffline = () => {
    infoCustom("You are offline");
  }

  //first time fetching of blogs
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