import "./sidebar.scss"
import { AiOutlineSearch } from "react-icons/ai"
import Tag from "../tag/Tag"
import { Link } from "react-router-dom"
import React from "react"
function Sidebar() {
    const recommended = [
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
                    <input type="text" placeholder="Search a blog." />
                </div>
                <div className="recommendedTagsContainer">
                    <span className="boldTitle">Recommended tags</span>
                    <div className="recommendedTag">
                        {
                            recommended.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)
                        }
                    </div>
                </div>
                <div className="recentlyWatchedBlogsContainer">
                    <span className="boldTitle">Previously watched blogs</span>
                    <div className="recentlyWatchedBlogs">
                        {
                            recentlyWatchBlogs.map((blog, idx) => (<React.Fragment key={idx}><Link to="/">{blog}</Link><br /></React.Fragment>))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar