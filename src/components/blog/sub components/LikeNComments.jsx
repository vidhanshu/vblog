import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs"
import { MdOutlineModeComment, MdModeComment } from "react-icons/md"
import { useState } from 'react'
import Comments from "./Comments"
function LikeNComments({ claps = 0, comments = [
    { user: "John Doe", comment: "This is a comment" },
    { user: "Jane Doe", comment: "This is another comment" },
] }) {

    const [like, setLike] = useState(false)
    const [comment, setComment] = useState(false)
    const [commentsData, setCommentsData] = useState(comments);

    return (
        <div className="container">
            <div className="clapAndComment border">
                <div className="like">
                    {
                        like
                            ? <BsSuitHeartFill className="fill-heart" onClick={() => setLike(false)} />
                            : <BsSuitHeart className="empty-heart" onClick={() => setLike(true)} />
                    }
                    <div className="count">{claps + like}</div>
                </div>
                <div className="comment">
                    {
                        comment
                            ? <MdModeComment className="fill-comment" onClick={() => setComment(false)} />
                            : <MdOutlineModeComment className="empty-comment" onClick={() => setComment(true)} />
                    }
                    <div className="count">{commentsData.length}</div>
                </div>
            </div>
            {
                comment && <Comments setCommentsData={setCommentsData} commentsData={commentsData} />
            }
        </div>
    )
}

export default LikeNComments