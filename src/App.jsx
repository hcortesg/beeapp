// import {  } from 'react'
import NavBar from './components/NavBar'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import LeapForm from './components/LeapForm'

function App() {
 
  return (
    <div className='bg-yellow-200 h-screen'>
      <NavBar/>
      <LeapForm/>
      {/* <TaskForm /> */}
      {/* <TaskList /> */}
    </div>
  )
}

export default App