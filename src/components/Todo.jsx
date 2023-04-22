import React from 'react'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
 
  return (
    <div className="Todo">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
          <i className="fas fa-edit" onClick={() => editTodo(task.id)} />
          <i className="fa fa-trash" aria-hidden="true" onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}