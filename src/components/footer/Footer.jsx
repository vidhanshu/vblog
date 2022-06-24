import "./footer.scss"
import "../../global.scss"
import { BsTwitch, BsFacebook, BsInstagram, BsTwitter, BsReddit, BsLinkedin } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import { Link } from "react-router-dom"
import Divider from "../divider/Divider"

function Footer() {
  return (
    <div className="footer">
      <div className="footerTop">
        <h1 className="footerLogo">vblog.</h1>
        <div className="socialIcons">
          <Link to="/">
            <BsFacebook />
          </Link>
          <Link to="/">
            <BsInstagram />
          </Link>
          <Link to="/">
            <BsReddit />
          </Link>
          <Link to="/">
            <BsTwitch />
          </Link>
          <Link to="/">
            <BsTwitter />
          </Link>
          <Link to="/">
            <BsLinkedin />
          </Link>
        </div>
      </div>
      <div className="footerContent">
        <div className="footerContentBottom">
          <p>D&D by vidhanshu with <AiFillHeart className="heart" /></p>
        </div>
      </div>
      <Divider theme="light"/>
      <div className="footerBottom">
        © All rights reserved by vblog.com
      </div>
    </div>
  )
}

export default Footer