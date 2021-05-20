import React from 'react';
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";
import "../style/Todolist.css";

const Todolist = () => {
    const todos = useSelector(state => state)
    return (
        <div className="todo-list">
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    );
}

export default Todolist;

