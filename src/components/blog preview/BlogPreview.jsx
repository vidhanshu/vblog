import "./blogPreview.scss"

import React, { useState } from 'react'

import { BsThreeDots } from "react-icons/bs"
import SwitchTabs from '../switchTabs/SwitchTabs'
import TagsList from '../tagsList/TagsList'

function BlogPreview({ title = "trying to fetch...", image, text = "trying to fetch...." }) {
    text = text.replace(/\n/g, "<br>")

    const [open, setOpen] = useState(false);

    const [active, setActive] = useState(0);
    const [activeLetterSpacing, setActiveLetterSpacing] = useState(0);

    const currentSize = active === 0 ? "15px" : active === 1 ? "18px" : "20px";
    const currentLetterSpacing = activeLetterSpacing === 0 ? "0px" : activeLetterSpacing === 1 ? "1px" : "2px";


    return (
        <>
            <div className="switch-tabs ">
                <span
                    onClick={() => setOpen(p => !p)}
                    className="border switch-menu">
                    <BsThreeDots />
                </span>
                {open ?
                    <div className="switch-options border">
                        <SwitchTabs active={active} setActive={setActive} options={["small", "medium", "large"]} />
                        <SwitchTabs active={activeLetterSpacing} setActive={setActiveLetterSpacing} options={['1px', '2px', '3px']} />
                    </div> : ''
                }
            </div>
            <div className='blog-container'>
                <div className="blogPreview border p-1">
                    <h1 className="blog-heading">
                        {
                            title
                        }
                    </h1>
                    <div className="image-container">
                        {image && <img src={image} alt="" />}
                    </div>
                    <div style={{
                        fontSize: currentSize,
                        letterSpacing: currentLetterSpacing,
                    }}
                        className="blogPreview-text"
                        dangerouslySetInnerHTML={{ __html: text }}
                    >
                    </div>
                    <div className="tags-list">
                        <TagsList tags={[]} toShowStatusText={false} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPreview