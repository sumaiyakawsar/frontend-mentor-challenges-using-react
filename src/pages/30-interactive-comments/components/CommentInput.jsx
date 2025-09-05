import { useState } from 'react'

const CommentInput = ({ currentUser, onSubmit }) => {
    const [content, setContent] = useState('')

    const handleSubmit = () => {
        if (!content.trim()) return
        onSubmit(content)
        setContent('')
    }

    return (
        <div className="comment-input">
            <img src={currentUser.image} alt={currentUser.username} className='avatar input'/>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Add a comment..." 
                maxLength={500}
            />
            <button onClick={handleSubmit} type='button' className='btn'>Send</button>
        </div>
    )
}

export default CommentInput
