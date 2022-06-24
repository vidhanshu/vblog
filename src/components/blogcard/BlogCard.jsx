import "./blogCard.scss"
import Tag from "../tag/Tag"
import Divider from "../divider/Divider"

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
                        <h4 className="boldTitle-sm">
                            Lorem ipsum dolor.
                        </h4>
                        <span className="dot">.</span>
                        <p className="lightText">
                            3m ago
                        </p>
                    </div>
                    <div className="bcMiddle">
                        <p className="bcBlogContent">
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
                <span className="lightText">2m to read</span>
            </div>
            <Divider theme="dark" />
        </div>
    )
}

export default BlogCard