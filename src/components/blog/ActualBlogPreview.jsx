import "./actualblogpreview.scss"
import BlogPreview from "../blog preview/BlogPreview"
import React, { useState } from 'react'
import LikeNComments from "./sub components/LikeNComments"
function ActualBlogPreview(props) {
    return (
        <div>
            <BlogPreview {...props} />
            <LikeNComments claps={props.claps} />
        </div>
    )
}

export default ActualBlogPreview