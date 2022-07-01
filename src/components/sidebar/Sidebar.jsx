import "./sidebar.scss"
import { AiOutlineSearch } from "react-icons/ai"
import Tag from "../tag/Tag"
import FavBlog from "../favoriteblogcard/FavBlog"
import { Link } from "react-router-dom"
import React from "react"
import Divider from "../divider/Divider"
function Sidebar() {
    const recommended = [
        "javascript",
        "programming",
        'c++',
        "productivity",
        "javascript",
        "programming",
        'c++',
        "productivity",
        "javascript",
        "programming",
        'c++',
        "productivity"
    ]
    const recentlyWatchBlogs = [
        "lorem ipsu, doler set amet",
        "lorem ipsu, doler set amet",
        "lorem ipsu, doler set amet",
        "lorem ipsu, doler set amet",
        "lorem ipsu, doler set amet",
        "lorem ipsu, doler set amet",
        "lorem ipsu, doler set amet",
        "lorem ipsu, doler set amet",
    ]
    return (
        <div className="sidebar">
            <div className="border sidebarSearchContainer">
                <div className="sidebarSearch border">
                    <AiOutlineSearch />
                    <input style={{backgroundColor:"transparent"}} type="text" placeholder="Search a blog." />
                </div>
                <div className="recommendedTagsContainer">
                    <span className="txtSB-2">Recommended tags</span>
                    <div className="recommendedTag">
                        {
                            recommended.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)
                        }
                    </div>
                </div>
                <div className="recentlyWatchedBlogsContainer">
                    <span className="txtSB-2">Previously watched blogs</span>
                    <div className="recentlyWatchedBlogs border">
                        {
                            recentlyWatchBlogs.map((blog, idx) => (<Link key={idx} to="/blog">{<FavBlog/>}<Divider/></Link>))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar