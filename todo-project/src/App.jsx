import { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import './App.css'
import TodoList from './components/TodoList'



function App() {

  return (
    <div className='App'>
      <div style={{
        width: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>
        <TodoCreate />
        <TodoList />
      </div>
    </div>


  )
}

export default App
