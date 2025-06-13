import React, { useState } from 'react'

const ReplyInput = ({ replyingTo, currentUser, onSubmit }) => {
    const [text, setText] = useState('')

    return (
        <div className="reply-input">
            <img src={currentUser.image} alt={currentUser.username} className='avatar input' />

            <textarea
                // value={`@${replyingTo}, ${text}`}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={`Reply to @${replyingTo}...`}
            />

            <button className='btn' type='button'
                onClick={() => {
                    if (text.trim()) {
                        onSubmit(text.trim())
                        setText('')
                    }
                }}
            >
                Reply
            </button>
        </div>
    )
}

export default ReplyInput
