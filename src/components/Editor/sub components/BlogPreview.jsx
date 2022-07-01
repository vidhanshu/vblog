import React from 'react'

function BlogPreview({ Heading, file, text }) {
    return (
        <>
            <p className="txtSB-1 mtb-2">
                Blog preview
            </p>
            <div className="preview border p-1">
                <h1 className="blog-heading">
                    {
                        Heading
                    }
                </h1>
                <div className="image-container">
                    {file && <img src={file} alt="" />}
                </div>
                <div className="text-preview">
                    {text}
                </div>
            </div>
        </>
    )
}

export default BlogPreview