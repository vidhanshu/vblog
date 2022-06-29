import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../../contexts/globalcontext'

function ProtectedRoute({ children }) {
    const { loggedInAs } = useGlobalContext();
    if (loggedInAs.user || window.localStorage.getItem("auth")) {
        return children
    } else {
        return <Navigate to="/auth" />
    }
}

export default ProtectedRoute