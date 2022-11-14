import React from 'react'
import { ACTIONS } from './App'



const Todo = ({todo, dispatch}) => {
  return (
    <div>
        <h1>{todo.name}</h1>
        <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})} >
            Delete
        </button>
    </div>
  )
}

export default Todo