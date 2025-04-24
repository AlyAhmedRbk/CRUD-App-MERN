import React from 'react'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import Footer from './components/Footer'

const App = () => {
  console.log(import.meta.env.VITE_API_URL)
  
  return (
    <div>
      <Navbar />
      <TodoForm />
      <Footer />
    </div>
  )
}

export default App