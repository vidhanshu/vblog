import React from 'react'
import TagWCross from "../tag with cross/TagWcross"

function TagsList({ tags = [], removeTag = () => { }, toShowStatusText = true }) {
    let tagsList
    if (!toShowStatusText) {
        tagsList = tags.map((tag, index) => <TagWCross className="mtb-1" key={index} handler={() => removeTag(tag)}>{tag}</TagWCross>);
    } else {
        tagsList = tags.length !== 0
            ? tags.map((tag, index) => <TagWCross className="mtb-1" key={index} handler={() => removeTag(tag)}>{tag}</TagWCross>)
            : <p className='txtL-3'>No tags added.</p>
    }
    return (
        <>
            <div className="tags-list">
                {tagsList}
            </div>
        </>
    )
}

export default TagsList