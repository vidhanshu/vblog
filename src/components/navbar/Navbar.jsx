import './navbar.scss'
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom"
import { useGlobalContext } from '../../contexts/globalcontext';
import { BsSun, BsMoon } from "react-icons/bs"
import { setThemeToLocalStorage } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

function Navbar({ logMeOut }) {
  const navigate = useNavigate();
  const { setDark, dark } = useGlobalContext();

  const [scrollY, setScrollY] = useState('0');
  const route = useLocation().pathname.replace("/", "");
  const bp = 60;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    })
  }, []);

  const color = scrollY <= bp ? { color: "white" } : { color: "black" };
  const active = scrollY <= bp ? { backgroundColor: "var(--btn-color)" } : { backgroundColor: "#ffffff" };
  active.borderRadius = "5px";
  active.padding = "5px";

  return (
    <nav className="nav" style={scrollY <= bp ? { backgroundColor: "var(--primary)" } : {}}>
      <div className="logo">
        <h1 onClick={() => navigate("/")} style={color}>vblog.</h1>
      </div>
      <ul className="options" >
        <Link style={route === "" ? active : null} to="/" ><li style={color}>HOME</li></Link>
        <Link style={route === "about" ? active : null} to="/about" ><li style={color}>ABOUT</li></Link>
        <Link style={route === "write" ? active : null} to="/write" ><li style={color}>WRITE</li></Link>
        <Link style={route === "settings" ? active : null} to="/settings" ><li style={color}>SETTINGS</li></Link>
        <span className='logout' style={route === "logout" ? active : null} onClick={logMeOut} ><li style={color}>LOGOUT</li></span>
      </ul>
      <div className="profile">
        <div>
          {dark
            ? <BsSun style={{ ...color, cursor: "pointer" }} onClick={() => {
              setDark(p => {
                return !p;
              })
              setThemeToLocalStorage(!dark);
            }} />
            : <BsMoon style={{ ...color, cursor: "pointer" }} onClick={() => {
              setDark(p => !p)
              setThemeToLocalStorage(!dark);
            }} />}

        </div>
        <Link to="/profile" >
          <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="profile" />
        </Link>
      </div>
    </nav>
  )
}

export default React.memo(Navbar);