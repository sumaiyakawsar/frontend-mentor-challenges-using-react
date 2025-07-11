import { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import { useTheme } from '../../components/theme/ThemeContext';
import './style/project36.scss';
import { BsSun, BsMoon } from "react-icons/bs";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import TodoFooter from "./component/TodoFooter";

import bgDesktopDark from "./images/bg-desktop-dark.jpg"
import bgDesktopLight from "./images/bg-desktop-light.jpg"
import bgMobileDark from "./images/bg-mobile-dark.jpg"
import bgMobileLight from "./images/bg-mobile-light.jpg"

let idCounter = 1;

const Project36 = () => {
    useFavicon("icons/project20.png");
    useDocumentTitle("TODO | Frontend Mentor");

    const { theme, toggleTheme } = useTheme();

    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        const loaded = saved ? JSON.parse(saved) : [];
        idCounter = Math.max(0, ...loaded.map(t => t.id)) + 1;
        return loaded;
    });

    const [filter, setFilter] = useState("all");

    const imgMobile = theme === "dark" ? bgMobileDark : bgMobileLight;
    const imgDesktop = theme === "dark" ? bgDesktopDark : bgDesktopLight;

    // Save todos on change
    const saveTodos = (newTodos) => {
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    // Add TODO
    const addTodo = (text) => {
        const newTodos = [...todos, { id: idCounter++, text, completed: false }];
        saveTodos(newTodos);
    };

    // Toggle complete
    const toggleComplete = (id) => {
        const updated = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        saveTodos(updated);
    };

    // Delete TODO
    const deleteTodo = (id) => {
        const updated = todos.filter((todo) => todo.id !== id);
        saveTodos(updated);
    };

    // Clear Completed
    const clearCompleted = () => {
        saveTodos(todos.filter((todo) => !todo.completed));
    };

    // Reorder after dragging
    const reorderTodos = (newTodos) => {
        saveTodos(newTodos);
    };

    return (
        <div className='project-36'>
            <div className="img__container">
                <picture>
                    <source srcSet={imgMobile} media="(max-width: 600px)" />
                    <img src={imgDesktop} alt="Header Image" />
                </picture>
            </div>

            <div className="todo__container">
                <div className="todo__header">
                    <h1>TODO</h1>
                    <button type="button" onClick={toggleTheme} className={`theme-toggle ${theme}`} >
                        {theme === "light" ? <BsMoon /> : <BsSun />}
                    </button>
                </div>

                <div className="todo__body">
                    <TodoForm addTodo={addTodo} />

                    <div className="todo__box">

                        {todos.length === 0 ? (
                            <div className="empty-message">No todos yet. Add one above! ✨</div>
                        ) : (
                            <TodoList
                                filter={filter}
                                todos={todos}
                                setTodos={setTodos}
                                toggleTodo={toggleComplete}
                                deleteTodo={deleteTodo}
                                reorderTodos={reorderTodos}
                            />
                        )}

                        <TodoFooter
                            filter={filter}
                            setFilter={setFilter}
                            clearCompleted={clearCompleted}
                            activeCount={todos.filter((todo) => !todo.completed).length} />

                    </div>

                    <div className="info">Drag and drop to reorder list</div>

                </div>
            </div>
        </div >
    )
}

export default Project36