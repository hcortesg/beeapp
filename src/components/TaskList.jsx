import { useContext } from 'react'
import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'

function TaskList() {
  // console.log(shores)
  const { shores } = useContext(TaskContext)


  if (shores.length === 0) {
    return (<p className='font-bold text-yellow-700'>No hay datos</p>)
  }
  return (
    <div>
      {shores.map((item) => (
        <TaskCard key={item.id}
          item={item} />
      ))}
    </div>
  )
}

export default TaskList