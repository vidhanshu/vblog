import './layout.scss'
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'
import { motion } from "framer-motion"

function Layout({ children }) {
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
        >
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </motion.main >
    )
}

export default Layout