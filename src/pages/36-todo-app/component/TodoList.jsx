import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableTodoItem from "./SortableTodoItem";
import { useState } from "react";

const TodoList = ({ todos, filter, toggleTodo, deleteTodo, reorderTodos }) => {
    const filtered = todos.filter((todo) =>
        filter === "active"
            ? !todo.completed
            : filter === "completed"
                ? todo.completed
                : true
    );

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const [activeId, setActiveId] = useState(null);

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        setActiveId(null);

        if (active.id !== over?.id) {
            const oldIndex = filtered.findIndex((todo) => todo.id === active.id);
            const newIndex = filtered.findIndex((todo) => todo.id === over.id);

            const newFilteredOrder = arrayMove(filtered, oldIndex, newIndex);

            const filteredIds = newFilteredOrder.map((t) => t.id);
            const notFiltered = todos.filter((t) => !filteredIds.includes(t.id));

            const reorderedTodos = [...newFilteredOrder, ...notFiltered];
            reorderTodos(reorderedTodos);
        }
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={filtered.map((todo) => todo.id)}
                strategy={verticalListSortingStrategy}
            >
                <ul className="todo-list" style={{ padding: 0, listStyle: "none" }}>
                    {filtered.map((todo) => (
                        <SortableTodoItem
                            key={todo.id}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    ))}
                </ul>
            </SortableContext>
        </DndContext>

    );
};

export default TodoList;