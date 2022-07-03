import React, { useState } from 'react'
import Divider from '../../divider/Divider'
import { useGlobalContext } from "../../../contexts/globalcontext"
import { onKeyPressed } from "../../../utils/utils"

function Comments({ commentsData = [], setCommentsData }) {

    const { loggedInAs } = useGlobalContext();
    const [currentComment, setCurrentComment] = useState('');
    const handleComment = () => {
        setCommentsData([...commentsData, { user: loggedInAs.user.username, comment: currentComment }]);
        setCurrentComment('');
    }
    return (
        <div className='border p-1 comments-container'>
            {
                commentsData.map((comment, index) => {
                    return (
                        <div className='single-comment' key={index}>
                            <div><span className="user">{comment.user} </span> : {comment.comment}</div>
                        </div>
                    )
                })
            }
            <Divider />
            <div className="enter-comment">
                <input
                    value={currentComment}
                    onKeyDown={(key) => onKeyPressed(key.key, handleComment, "Enter")}
                    className='input'
                    type="text"
                    placeholder="Enter your comment"
                    onChange={evt => setCurrentComment(evt.target.value)}
                />
                <button onClick={handleComment} className="login-btn">post</button>
            </div>
        </div>
    )
}

export default Comments