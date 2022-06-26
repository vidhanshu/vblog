import './layout.scss'
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'
import { motion } from "framer-motion"
import { FiMenu } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import { useState } from 'react'
import { Link } from "react-router-dom"
function Layout({ children }) {
    const [nav, setNav] = useState(false);
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5
            }
        }
    }
    return (
        <motion.main
            variants={container}
            initial="hidden"
            animate="show"
            className='main'
        >
            <ul className={nav ? "nav-bar-mobile-active border" : "nav-bar-mobile border"}>
                <Link to="/" ><li>HOME</li></Link>
                <Link to="/about" ><li>ABOUT</li></Link>
                <Link to="/write" ><li>WRITE</li></Link>
                <Link to="/settings" ><li>SETTINGS</li></Link>
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