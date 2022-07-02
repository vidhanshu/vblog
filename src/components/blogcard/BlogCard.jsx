import "./blogCard.scss"
import Tag from "../tag/Tag"
import { Link } from "react-router-dom"

function BlogCard({ tags = [], title = "", createdAt = "", text = "", image = "", readTime = "", _id = "" }) {

    let Tags;
    if (tags.length <= 2) {
        Tags = tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)
    } else {
        Tags = <><Tag>{tags[0]}</Tag><Tag>{tags[1]}</Tag>
            <Link to={`/blog/${_id}`}><Tag >+{tags.length - 2}</Tag></Link></>
    }
    return (
        <div className="blogCard">
            <div className="bcWrapper">
                <div>
                    <div className="bcTop">
                        <div className="bcProfile">
                            <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
                        </div>
                        <div className="bcTopContent">
                            <h4 className="txtB-2">
                                {title}
                            </h4>
                            <p className="txtL-3">
                                {createdAt}
                            </p>
                        </div>
                    </div>
                    <div className="bcMiddle">
                        <p className="bcBlogContent txtL-3x">
                            {text}...
                        </p>
                    </div>
                </div>
                <div className="bcBlogImage">
                    <img src={image ? image : "https://media.istockphoto.com/vectors/error-document-icon-vector-id1062127004?k=6&m=1062127004&s=612x612&w=0&h=94D4dEDZzXuNQ0rhw7yftXb259wNpjDMoNmcl9KvUD8="} alt="" />
                </div>
            </div>
            <div className="bcBottom">
                <div className="tags">
                    {Tags}
                    <span className="txtL-3">{readTime} to</span>
                </div>
                <Link to={`/blog/${_id}`} className="btn-sqr ma-1 txt-3 btn-read-blog">read</Link>
            </div>
        </div >
    )
}

export default BlogCard