import './layout.scss'
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'
import { motion } from "framer-motion"
import { FiMenu } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import { useState } from 'react'
import { Link, useLocation } from "react-router-dom"
function Layout({ children }) {
    const [nav, setNav] = useState(false);
    const route = useLocation().pathname.replace("/", "");

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5
            }
        }
    }
    const active = {
        borderRadius: "5px",
        padding: "5px",
        backgroundColor: "var(--btn-hover-color)"
    }

    return (
        <motion.main
            variants={container}
            initial="hidden"
            animate="show"
            className='main'
        >
            <ul className={nav ? "nav-bar-mobile-active border" : "nav-bar-mobile border"}>
                <Link style={route === "" ? active : null} to="/" ><li>HOME</li></Link>
                <Link style={route === "about" ? active : null} to="/about" ><li>ABOUT</li></Link>
                <Link style={route === "write" ? active : null} to="/write" ><li>WRITE</li></Link>
                <Link style={route === "settings" ? active : null} to="/settings" ><li>SETTINGS</li></Link>
            </ul>

            <div className="menu-btn border" onClick={() => setNav(e => !e)}>
                {
                    nav ? <VscChromeClose /> : <FiMenu />
                }
            </div>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </motion.main >
    )
}

export default Layout