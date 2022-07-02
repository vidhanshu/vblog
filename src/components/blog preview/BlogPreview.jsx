import React from 'react'
import "./blogPreview.scss"
import TagsList from '../tagsList/TagsList'

function BlogPreview({ Heading = "blog Heading", file, text = "content" }) {

    return (
        <>
            <div className="blogPreview border p-1">
                <h1 className="blog-heading">
                    {
                        Heading
                    }
                </h1>
                <div className="image-container">
                    {file && <img src={file} alt="" />}
                </div>
                <div className="blogPreview-text">
                    {
                        text.length !== 0
                        ? text
                        : <span className='txtL-2'>Start typing blog to see preview...</span>
                    }
                </div>
                <div className="tags-list">
                    <TagsList tags={[]} toShowStatusText={false} />
                </div>
            </div>
        </>
    )
}

export default BlogPreview