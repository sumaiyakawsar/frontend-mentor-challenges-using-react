import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text.trim());
            setText("");
        }
    };


    return (
        <form onSubmit={handleSubmit} className="todo-input">
            <span className="circle" />

            <label htmlFor="todo-input" className="sr-only">Create a new todo</label>

            <input autoFocus
                type="text" id="todo-input"
                placeholder="Create a new todo..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </form>

    );
};

export default TodoForm;