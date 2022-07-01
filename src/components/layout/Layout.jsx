import './layout.scss'
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'
import { motion } from "framer-motion"
import { FiMenu } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import { useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { logoutHandler } from '../../utils/authHandlers'
import { useGlobalContext } from '../../contexts/globalcontext'

function Layout({ children }) {

    const navigate = useNavigate();

    const [nav, setNav] = useState(false);
    const route = useLocation().pathname.replace("/", "");

    const { setLoggedInAs, loggedInAs } = useGlobalContext();

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
        backgroundColor: "var(--mobile-nav-hover-color)"
    }
    const logMeOut = async () => {
        await logoutHandler(loggedInAs.token, setLoggedInAs, navigate);
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
                <Link to="/auth" onClick={logMeOut}>LOGOUT</Link>
            </ul>

            <div className="menu-btn border" onClick={() => setNav(e => !e)}>
                {
                    nav ? <VscChromeClose /> : <FiMenu />
                }
            </div>
            <Navbar logMeOut={logMeOut} />
            <div>
                {children}
            </div>
            <Footer />
        </motion.main >
    )
}

export default Layout