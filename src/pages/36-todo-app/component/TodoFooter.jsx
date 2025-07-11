import React from 'react'

function TodoFooter({ filter, setFilter, clearCompleted, activeCount }) {
    return (
        <div className="todo__footer">
            <div className="top">
                <span>{activeCount} items left</span>
                <button className='clear__all__mobile' onClick={clearCompleted}>Clear Completed</button>
            </div>
            <div className="buttons">
                {["all", "active", "completed"].map((f) => (
                    <button
                        key={f}
                        className={filter === f ? "active" : ""}
                        onClick={() => setFilter(f)}
                    >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}
            </div>
            <button className='clear__all' onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoFooter