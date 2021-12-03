import React,{useState} from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
import TodoForm from './TodoForm'
import ToDo from './ToDo';

function TodoList() {
    const [todos,setTudos]= useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^s*$/.test(todo.text)){
            return;
        }

        const newTodos=[todo,...todos];

        setTudos(newTodos);
    };

    const completeTodo = id =>{
        let updatedTodos=todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
    }

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm />
            <ToDo todos={todos} completeTodo={completeTodo}/>
        </div>
    )
}

export default TodoList
