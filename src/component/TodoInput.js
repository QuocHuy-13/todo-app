import React, { useState } from 'react';
import "../style/TodoInput.css";
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const TodoInput = () => {
    let [name, setName] = useState('');
    let dispatch = useDispatch();
    return (
        <div className='todo-form'>
            <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder='Add a todo'
                name='text'
                className='todo-input'
            />
            <button
                className='todo-button'
                onClick={()=>{
                       dispatch(  addTodo({
                        id: Math.floor(Math.random() * 100),
                        name: name
                    }));
                        setName('');
                    }}>
                Add todo
            </button>
        </div>
    );
}

export default TodoInput;

