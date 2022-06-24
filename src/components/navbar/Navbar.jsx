import './navbar.scss'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
function Navbar() {
  const [scrollY, setScrollY] = useState('0');

  const bp = 60;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    })
  }, []);

  const color = scrollY <= bp ? { color: "white" } : {};

  return (
    <nav className="nav" style={scrollY <= bp ? { backgroundColor: "var(--primary)" } : {}}>
      <div className="logo">
        <h1 style={color}>vblog.</h1>
      </div>
      <ul className="options" >
        <Link to="/" ><li style={color}>HOME</li></Link>
        <Link to="/about" ><li style={color}>ABOUT</li></Link>
        <Link to="/write" ><li style={color}>WRITE</li></Link>
        <Link to="/settings" ><li style={color}>SETTINGS</li></Link>
      </ul>
      <div className="profile">
        <Link to="/profile" >
          <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="profile" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar