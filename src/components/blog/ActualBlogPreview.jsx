import "./actualblogpreview.scss"

import BlogPreview from "../blog preview/BlogPreview"
import LikeNComments from "./sub components/LikeNComments"
import React from 'react'

function ActualBlogPreview(props) {
    return (
        <div className="actual_blog_preview_container">
            <BlogPreview {...props} />
            <LikeNComments claps={props.claps} />
        </div>
    )
}

export default ActualBlogPreview