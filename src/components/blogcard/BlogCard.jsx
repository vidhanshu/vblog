import "./blogCard.scss"
import Tag from "../tag/Tag"
import Divider from "../divider/Divider"
import {Link} from "react-router-dom"
function BlogCard() {
    const tags = [
        "javascript",
        "java",
        "c++",
        "programming",
    ]

    let Tags;
    if (tags.length <= 2) {
        Tags = tags.map(tag => <Tag>{tag}</Tag>)
    } else {
        Tags = <><Tag>{tags[0]}</Tag><Tag>{tags[1]}</Tag><Tag>+{tags.length - 2}</Tag></>
    }
    return (
        <div className="blogCard">
            <div className="bcWrapper">
                <div>
                    <div className="bcTop">
                        <div className="bcProfile">
                            <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
                        </div>
                        <h4 className="txtB-1">
                            Lorem ipsum dolor.
                        </h4>
                        <span className="dot">.</span>
                        <p className="txtL-3">
                            3m ago
                        </p>
                    </div>
                    <div className="bcMiddle">
                        <p className="bcBlogContent txtL-2">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, quaerat corporis adipisci perspiciatis dignissimos error beatae voluptatum. Dicta harum eum non provident sint. Omnis, doloremque aut pariatur inventore assumenda cupiditate?
                        </p>
                    </div>
                </div>
                <div className="bcBlogImage">
                    <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
                </div>
            </div>
            <div className="bcBottom">
                {
                    Tags
                }
                <span className="dot">.</span>
                <span className="txtL-3">2m to read</span>
                <Link to="/blog" className="btn-sqr p-1 ma-1 txt-3">read</Link>
            </div>
            <Divider theme="dark" />
        </div>
    )
}

export default BlogCard