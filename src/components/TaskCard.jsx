import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskCard({ item }) {
  // con esto ya se tiene acceso al contexto
  const { deleteShore } = useContext(TaskContext)
  // console.log(varX)

  return (
    <li className='bg-purple-800 text-yellow-200 p-1 rounded-md m-1'>{item.id}.
      <span className='text-xl bold'>
        {item.title}.
      </span>
      Asignada:
      <span className='text-xl bold'>
       {item.description}
      </span>
      <button className='bg-orange-500 p-1 ml-2 rounded-md hover:bg-orange-400' 
      onClick={() => deleteShore(item.id)} 
      >Eliminar</button>
    </li>
  )
}

export default TaskCard