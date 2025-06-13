// import React, { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project30.scss';
// import { status } from "./data/data";
// import CommentThread from "./components/CommentThread";

import React, { useState, useEffect } from 'react'
import { status as initialStatus } from './data/commentsData'
import Comment from './components/Comment'
import CommentInput from './components/CommentInput'
import DeleteModal from './components/DeleteModal' // import this

const LOCAL_STORAGE_KEY = 'commentsData'

const getMaxId = (comments) => {
    const allIds = comments.flatMap(c => [
        c.id,
        ...(c.replies ? c.replies.map(r => r.id) : [])
    ])
    return allIds.length ? Math.max(...allIds) : 0
}


function Project30() {
    useFavicon("icons/project18.png");
    useDocumentTitle("Interactive comments | Frontend Mentor");


    
        // Step 1: Get initial data from localStorage or fallback
        const initialData = (() => {
            const localData = localStorage.getItem(LOCAL_STORAGE_KEY)
            return localData ? JSON.parse(localData) : initialStatus[0]
        })()
    
        const [data, setData] = useState(initialData)
    
        const [lastId, setLastId] = useState(() =>
            getMaxId(initialData.comments)
        )
        const [deleteTargetId, setDeleteTargetId] = useState(null)
        const [showDeleteModal, setShowDeleteModal] = useState(false)
    
        // Step 2: Persist to localStorage
        useEffect(() => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
            localStorage.setItem('lastId', lastId)
        }, [data, lastId])
    
    
        const getNextId = () => {
            const next = lastId + 1
            setLastId(next)
            return next
        }
    
        // Create Comment
        const handleAddComment = (content) => {
            const newComment = {
                id: getNextId(),
                content,
                createdAt: Date.now(),
                score: 0,
                user: data.currentUser,
                replies: []
            }
    
            setData(prev => ({
                ...prev,
                comments: [...prev.comments, newComment]
            }))
        }
    
        // Create Replies
        const addReply = (parentCommentId, newReply) => {
            const updatedComments = data.comments.map(comment => {
                if (comment.id === parentCommentId) {
                    return {
                        ...comment,
                        replies: [...comment.replies, newReply]
                    }
                }
                return comment
            })
    
            setData({ ...data, comments: updatedComments })
        }
    
        // Update Comments/Reply
        const updateNestedComments = (comments, id, callback) => {
            return comments.map(comment => {
                if (comment.id === id) {
                    return callback(comment)
                }
    
                if (comment.replies && comment.replies.length > 0) {
                    return {
                        ...comment,
                        replies: updateNestedComments(comment.replies, id, callback)
                    }
                }
    
                return comment
            })
        }
    
        const updateCommentOrReply = (id, updatedContent) => {
            const updatedComments = updateNestedComments(data.comments, id, item => ({
                ...item,
                content: updatedContent
            }))
    
            setData({ ...data, comments: updatedComments })
        }
    
        //Delete Comments/Reply
        const deleteNestedComment = (comments, id) => {
            return comments
                .filter(comment => comment.id !== id)
                .map(comment => ({
                    ...comment,
                    replies: deleteNestedComment(comment.replies || [], id)
                }))
        }
    
        const handleConfirmDelete = () => {
            if (deleteTargetId !== null) {
                const updatedComments = deleteNestedComment(data.comments, deleteTargetId)
                setData({ ...data, comments: updatedComments })
                setDeleteTargetId(null)
                setShowDeleteModal(false)
            }
        }
    
        const handleCancelDelete = () => {
            setDeleteTargetId(null)
            setShowDeleteModal(false)
        }
    
        const requestDelete = (id) => {
            setDeleteTargetId(id)
            setShowDeleteModal(true)
        }
    
        // Upvote Comments/Reply
        const vote = (id, delta) => {
            const updateScore = (items) => {
                return items.map(item => {
                    if (item.id === id) {
                        return { ...item, score: item.score + delta }
                    }
    
                    if (item.replies && item.replies.length > 0) {
                        return {
                            ...item,
                            replies: updateScore(item.replies)
                        }
                    }
    
                    return item
                })
            }
    
            const updatedComments = updateScore(data.comments)
            setData({ ...data, comments: updatedComments })
        }
    
    return (
        <div className='project30'>
            <div className="comments-container">
                {data.comments.map(comment => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        currentUser={data.currentUser}
                        onReply={addReply}
                        onUpdate={updateCommentOrReply}
                        // onDelete={deleteCommentOrReply}
                        onDelete={requestDelete} // change this line
                        onVote={vote}
                        getNextId={getNextId}
                    />
                ))}


                {/* New Comment Input */}
                <CommentInput
                    currentUser={data.currentUser}
                    onSubmit={handleAddComment}
                />

                {showDeleteModal && (
                    <DeleteModal
                        onCancel={handleCancelDelete}
                        onConfirm={handleConfirmDelete}
                    />
                )}

            </div>
        </div>
    )
}

export default Project30