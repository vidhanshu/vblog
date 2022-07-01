import React from 'react'
import "./notFound.scss"
import { useNavigate } from "react-router-dom"
function NotFound() {
    const navigate = useNavigate();
    return (
        <div className='not-found-page'>
            <h1 className='txtB-1'>404</h1>
            <p>Page not found</p>
            <img src="https://i.postimg.cc/2SKwJHQC/404.png" alt="404" />
            <button className="login-btn" onClick={()=>navigate("/")}>back to home</button>
        </div>
    )
}

export default NotFound