// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'
import './styles.css'
import { useState,useEffect } from 'react'





export default function App() {
  // const [todos, setTodos] = useState([])
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    //Taking todos to local storage
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])

  function addTodo(title) {
    // e.preventDefault()
      setTodos((currTodos) => {
          return [
              ...currTodos,
              { id: crypto.randomUUID(), title: title, completed: false },
          ]
      }
      )
  }

  function toggleTodo(id, completed) {
    setTodos(currTodos => {
      return currTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currTodos => {
      return currTodos.filter(todo => todo.id !== id)
    })
  }

  // function deleteTodo(id) {
  //   setTodos(currTodos => {
  //     return currTodos.map(todo => {
  //       if (todo.id === id) {
  //         return {}
  //       }
  //       return todo
  //     })
  //   })
  // }


  // console.log(todos)

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className='header'>TO-DO List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo }/>
    </>
  )
}
