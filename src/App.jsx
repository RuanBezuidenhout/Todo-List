import { useEffect, useState } from 'react'
import './style.css'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'

export default function App() {
  
  // save todo items changes in local storage
  const[todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  //function to add new item
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        { id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  //function for todo item completed check
  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  //function to delete todo item
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todos => todos.id !== id)
    })
  }

  //get Todoform
  return( 
    <div>
      <TodoForm onSubmit={addTodo}></TodoForm>
      <h1 className= "header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoList>
  </div>
  )
}
