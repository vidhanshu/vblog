import "./favblog.scss"

function FavBlog() {
    return (
        <div className='favBlog mtb-2'>
            <div className="favTop">
                <div className="favTopContent">
                    <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
                    <p className="txtL-3 ml">Lorem ipsum dolor sit amet.</p>
                </div>
                <h4 className="txtB-2 mtb-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veritatis voluptas?
                </h4>
            </div>
            <div className="favBlogImage">
                <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
            </div>
        </div>
    )
}

export default FavBlog