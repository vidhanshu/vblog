import React from 'react'
import TagWCross from '../../tag with cross/TagWcross'

function TagsList({ tags, removeTag }) {
    return (
        <>
            <div className="tags-list">
                {tags.length !== 0
                    ? tags.map((tag, index) => <TagWCross key={index} handler={() => removeTag(tag)}>{tag}</TagWCross>)
                    : <p className='txtL-3'>No tags available</p>}
            </div>
        </>
    )
}

export default TagsList