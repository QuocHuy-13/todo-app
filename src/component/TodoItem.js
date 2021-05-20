import React,{useState} from 'react';
import "../style/TodoItem.css"
import {useDispatch} from "react-redux";
import { deleteTodo, updateTodo } from '../redux/actions';

const TodoItem = (props) => {
    const todo = props.todo ;
    const [edit, setEdit] = useState(false);
    const [name, setname] = useState(todo.name);
    const dispatch = useDispatch() ;
    return (
        <div className="row mt-16">
            <div className="col col-2">
                {edit ? <input type="text" className="form-control" value={name} onChange={(e) => setname(e.target.value)}/> : <div>{todo.name}</div>}
            </div>
            <div className="col col-2">
                <button
                    onClick = {() => {
                        dispatch(updateTodo({
                            id: todo.id,
                            name : name,
                        }))
                        setEdit(!edit)
                    }} 
                    type="button" 
                    className="btn-primary mx-5"
                    >{edit ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-pencil"></i>}
                </button>
                <button 
                    type="button" 
                    className="btn-danger mx-5"
                    onClick = {() => dispatch(deleteTodo(todo.id))}
                    ><i className="fa fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default TodoItem;

// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { deleteTodo, updateTodo } from '../redux/actions';

// function TodoItem({ todo }) {
//     const [editable, setEditable] = useState(false)
//     const [name, setName] = useState(todo.name)
//     let dispatch = useDispatch();

//     return (
//         <div>
//             <div className="row mx-2 align-items-center">
//                 <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
//                 <div className="col">
//                     {editable ?
//                         <input type="text" className="form-control"
//                             value={name}
//                             onChange={(e) => {
//                                 setName(e.target.value);
//                             }}

//                         />
//                         :
//                         <h4>{todo.name}</h4>}
//                 </div>
//                 <button className="btn btn-primary m-2"
//                     onClick={() => {
//                         dispatch(updateTodo({
//                             ...todo,
//                             name: name
//                         }))
//                         if(editable) {
//                          setName(todo.name);   
//                         }
//                         setEditable(!editable);
                      

//                     }}
//                 >{editable?"Update":"Edit"}</button>
//                 <button className="btn btn-danger m-2"
//                     onClick={() => dispatch(deleteTodo(todo.id))}
//                 >Delete</button>
//             </div>
//         </div>
//     )
// }

// export default TodoItem