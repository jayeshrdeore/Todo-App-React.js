import React from 'react'
import  IndividualTodo  from './IndividualTodo'

const Todos = ({todos, deleteTodo, editModal,completeTodo}) => {
    return todos.map((individualTodo)=>(
        <IndividualTodo individualTodo={individualTodo} 
        key={individualTodo.id} deleteTodo={deleteTodo}
            editModal={editModal}/>
    ))
}

export default Todos;