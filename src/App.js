import React, { useReducer, useState } from 'react'
import Todo from './Todo'

export const ACTIONS = {
  ADD_TODO: 'add_todo',
  DELETE_TODO: 'delete_todo'
}


const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
  }
}

const newTodo = (name) => {
  return {
    id: Date.now(),
    name: name,
    complete: false
  }
}

const App = () => {

  const [name, setName] = useState('')
  const [todos, dispatch] = useReducer(reducer, [])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {name: name}
    })
    setName('')
  }


  return (
    <div>
        <form onSubmit={submitHandler} >
          <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} />
       </form>
       {
        todos.map(todo => (
          <Todo todo={todo} key={todo.id} dispatch={dispatch} />
        ))
       }
      
    </div>
  )
}

export default App