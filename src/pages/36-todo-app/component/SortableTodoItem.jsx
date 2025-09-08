import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { MdDragIndicator } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const SortableTodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: todo.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        cursor: "grab",
    };

    return (

        <li
            ref={setNodeRef}
            style={style}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
        >


            {/* ✅ Completion toggle */}
            <div className="todoo">
                <div className="checkmark-wrapper">
                    <button
                        type="button"
                        className={`checkmark ${todo.completed ? "checked" : ""}`}
                        onClick={() => toggleTodo(todo.id)}
                        aria-pressed={todo.completed}
                    />
                </div>

                <span className={`text ${todo.completed ? "completed" : ""}`} onClick={() => toggleTodo(todo.id)}>
                    {todo.text}
                </span>
            </div>

            <div className="btn__container">
                {/* ✅ Drag handle */}
                <span className="drag-handle"
                    {...attributes}
                    {...listeners}
                    role="button"
                    aria-label={`Drag handle for ${todo.text}`}
                >
                    <MdDragIndicator />
                </span>


                {/* ✅ Delete button */}
                <button
                    type="button"
                    className="delete-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteTodo(todo.id);
                    }}
                    aria-label={`Delete todo: ${todo.text}`}
                >
                    <IoClose />
                </button>
            </div>
        </li>
    );
};

export default SortableTodoItem;
