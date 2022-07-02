import "./userProfile.scss"
import { BsTwitch, BsFacebook, BsInstagram, BsTwitter, BsReddit, BsLinkedin } from "react-icons/bs"
import { Link } from "react-router-dom"
import { FavBlog,Divider,Layout } from "../../components"
import MediaQuery from "react-responsive"
function UserProfile() {
    return (
        <div className="profileDetails">
            <div className="profileImage mtb-1">
                <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
                <p className="txtSB-2xx mtb-1">
                    John Doe
                </p>
                <p className="txtL-2 mtb-1">
                    Followers 1.2k
                </p>
            </div>
            <div className="profileAbout txtL-3 mtb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem reprehenderit laboriosam eligendi consequuntur quis omnis sit? Animi, reiciendis aspernatur.
            </div>
            <div className="profileFollow">
                <button className="circular-btn">Follow</button>
                <div className="socialIcons ml-2">
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
            <MediaQuery minWidth={1200}>
                <div className="profileFavoriteContainer mtb-2">
                    <p className="txtL-2xx">More from vblog.</p>
                    <div className="profileFavorite border">
                        <FavBlog />
                        <Divider />
                        <FavBlog />
                        <Divider />
                        <FavBlog />
                        <Divider />
                        <FavBlog />
                        <Divider />
                        <FavBlog />
                        <Divider />
                        <FavBlog />
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}

export default UserProfile