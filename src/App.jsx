// import {  } from 'react'
import NavBar from './components/NavBar'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import second from './components/LeapForm'
import LeapForm from './components/LeapForm'

function App() {
 
  return (
    <div className='bg-pink-200 h-screen'>
      <NavBar/>
      <LeapForm/>
      {/* <TaskForm /> */}
      {/* <TaskList /> */}
    </div>
  )
}

export default App