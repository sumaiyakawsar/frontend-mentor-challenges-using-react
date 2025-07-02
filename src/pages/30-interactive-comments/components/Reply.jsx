import React, { useState } from 'react'
import ReplyInput from './ReplyInput'
import { FaReply, FaPencilAlt, FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { timeAgo } from '../../../components/utility/timeAgo';

const Reply = ({ reply, currentUser, onReply, onUpdate, onDelete, onVote, getNextId }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editedContent, setEditedContent] = useState(reply.content)
    const [showReplyBox, setShowReplyBox] = useState(false)

    const isOwner = reply.user.username === currentUser.username

    const handleSave = () => {
        onUpdate(reply.id, editedContent)
        setIsEditing(false)
    }


    return (
        <div className="container">


            <div className="reply">

                <div className="vote">
                    <button type='button' className='btn_vote' onClick={() => onVote(reply.id, 1)}><FaPlus /></button>
                    <span>{reply.score}</span>
                    <button type='button' className='btn_vote' onClick={() => onVote(reply.id, -1)}><FaMinus /></button>
                </div>

                <div className="profile">
                    <img src={reply.user.image} alt={reply.user.username} className="avatar noinput" />
                    <strong className="username">{reply.user.username}</strong>
                    {isOwner && (<span className="tag">you</span>)}
                    <span className='time'>{timeAgo(reply.createdAt)}</span>
                </div>

                <div className="btn__container">
                    {isOwner ? (
                        <>
                            <button type='button' className='btn__link delete' onClick={() => onDelete(reply.id)}>
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
                            <FaReply />
                            Reply
                        </button>
                    )}
                </div>

                {isEditing ? (
                    <div className='edit_box content'>
                        <textarea
                            // value={`@${reply.replyingTo} ${editedContent}`}
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                            className='edit__reply'
                        />
                        <button onClick={handleSave} type='button' className='btn'>Update</button>
                    </div>
                ) : (
                    <div className='content'>
                        <span className="replying-to">@{reply.replyingTo}</span> {reply.content}
                    </div>
                )}

            </div>


            {showReplyBox && (
                <ReplyInput
                    replyingTo={reply.user.username}
                    currentUser={currentUser}
                    getNextId={getNextId}
                    onSubmit={(replyContent) => {
                        const newReply = {
                            id: getNextId(),
                            content: replyContent,
                            createdAt: Date.now(),
                            score: 0,
                            replyingTo: reply.user.username,
                            user: currentUser,
                            replies: [] // 👈 Needed for nested replies
                        }
                        onReply(reply.commentId, {
                            ...newReply,
                            replyingTo: reply.user.username
                        })
                        setShowReplyBox(false)
                    }}
                />
            )}

            {reply.replies && reply.replies.length > 0 && (
                <div className="replies">
                    {reply.replies.map((nestedReply) => (
                        <Reply
                            key={nestedReply.id}
                            reply={nestedReply}
                            currentUser={currentUser}
                            onReply={onReply}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                            onVote={onVote}
                        />
                    ))}
                </div>
            )}

        </div >
    )
}

export default Reply
