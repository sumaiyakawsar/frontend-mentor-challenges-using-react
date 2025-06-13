import { useState } from 'react'
import Reply from './Reply'
import ReplyInput from './ReplyInput'
import { timeAgo } from '../../../components/timeAgo'
import { FaReply, FaPencilAlt, FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Comment = ({ comment, currentUser, onReply, onUpdate, onDelete, onVote, getNextId }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editedContent, setEditedContent] = useState(comment.content)
    const [showReplyBox, setShowReplyBox] = useState(false)

    const isOwner = comment.user.username === currentUser.username

    const handleSave = () => {
        onUpdate(comment.id, editedContent)
        setIsEditing(false)
    }

    return (
        <div className="container">

            <div className="comment">

                <div className="vote">
                    <button type='button' className="btn_vote" onClick={() => onVote(comment.id, 1)}><FaPlus /></button>
                    <span>{comment.score}</span>
                    <button type='button' className="btn_vote" onClick={() => onVote(comment.id, -1)}><FaMinus /></button>
                </div>


                <div className="profile">
                    <img src={comment.user.image} alt={comment.user.username} className="avatar noinput" />
                    <strong className="username">{comment.user.username}</strong>
                    {isOwner && (<span className="tag">you</span>)}
                    <span className="time">{timeAgo(comment.createdAt)}</span>
                </div>

                <div className="btn__container">
                    {isOwner ? (
                        <>
                            <button type='button' className='btn__link delete' onClick={() => onDelete(comment.id)}>
                                <MdDelete className="icon" />
                                Delete
                            </button>
                            <button type='button' className='btn__link' onClick={() => setIsEditing(true)}>
                                <FaPencilAlt className="icon" />
                                Edit
                            </button>
                        </>
                    ) : (
                        <button type='button' className='btn__link' onClick={() => setShowReplyBox(!showReplyBox)}>
                            <FaReply className="icon" />
                            Reply
                        </button>
                    )}
                </div>

                {isEditing ? (
                    <div className='edit_box content'>
                        <textarea
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                            className='edit__reply'
                        />
                        <button onClick={handleSave} type='button' className='btn'>Update</button>
                    </div>
                ) : (
                    <div className='content'>{comment.content}</div>
                )}
            </div>




            {showReplyBox && (
                <ReplyInput
                    replyingTo={comment.user.username}
                    currentUser={currentUser}
                    getNextId={getNextId}
                    onSubmit={(replyContent) => {
                        const newReply = {
                            id: getNextId(),
                            content: replyContent,
                            createdAt: Date.now(),
                            score: 0,
                            replyingTo: comment.user.username,
                            user: currentUser, replies: []
                        }
                        onReply(comment.id, newReply)
                        setShowReplyBox(false)
                    }}
                />
            )}

            {comment.replies.length > 0 && (
                <div className="replies">
                    {comment.replies.map(reply => (
                        <Reply
                            key={reply.id}
                            reply={{ ...reply, commentId: comment.id }} // ⬅ Add this
                            currentUser={currentUser}
                            onReply={onReply}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                            onVote={onVote}
                            getNextId={getNextId}

                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Comment