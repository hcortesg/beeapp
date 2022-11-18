// import {  } from 'react'
import NavBar from './components/NavBar'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
 
  return (
    <div className='bg-yellow-200 h-screen'>
      <NavBar/>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App