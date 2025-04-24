import React from 'react'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'

const App = () => {
  console.log(import.meta.env.VITE_API_URL)
  
  return (
    <div>
      <Navbar />
      <TodoForm />
    </div>
  )
}

export default App