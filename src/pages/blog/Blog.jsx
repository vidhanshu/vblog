import "./blog.scss"
import { Layout, Section, BlogPreview } from "../../components"
import { FavBlog } from "../../components"
import { BsTwitch, BsFacebook, BsInstagram, BsTwitter, BsReddit, BsLinkedin } from "react-icons/bs"
import { Link } from "react-router-dom"

function Blog() {
    return (
        <Layout>
            <Section>
                <div className="blogContainer">
                    <BlogPreview />
                    <div className="profileDetails">
                        <div className="profileImage mtb">
                            <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
                            <p className="semiBoldTitle-sm mtb">
                                John Doe
                            </p>
                            <p className="lightTitle-ssm-grey mtb">
                                Followers 1.2k
                            </p>
                        </div>
                        <div className="profileAbout lightText mtb">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem reprehenderit laboriosam eligendi consequuntur quis omnis sit? Animi, reiciendis aspernatur.
                        </div>
                        <div className="profileFollow">
                            <button className="circular-btn">Follow</button>
                            <div className="socialIcons ml-sm">
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
                        <div className="profileFavoriteContainer mtb-sm">
                            <p className="semiBoldTitle-sm-grey">More from vblog.</p>
                            <div className="profileFavorite">
                                <FavBlog />
                                <FavBlog />
                                <FavBlog />
                                <FavBlog />
                                <FavBlog />
                                <FavBlog />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default Blog