import { useState, useContext, useEffect } from 'react'
// import { listado } from './tasks'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState([])
  // const [lista, setLista] = useState([])
  const { createShore } = useContext(TaskContext)
  // console.log(varX)
  // useEffect(() => {
  //   setLista(listado)
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title != '') {
      createShore({ title, detail })
      // console.log(title)
    }
    setTitle('')
    setYear('')
    setDetail('')
  }

  return (
    <div className='max-w-md' >
      <form action="#" onSubmit={handleSubmit}
        className="bg-purple-100 text-yellow-700 text-xl bold p-2">
        <p className='font-bold'>Hora a programar</p>
        <input autoFocus value={title} placeholder='Hora a programar'
          onChange={(e) => {
            // console.log(e.target.value)
            setTitle(e.target.value)
          }}
          className='mb-2 w-full'
        />
        <textarea value={detail} placeholder='Detalle de la meditación'
          onChange={(e) => {
            // console.log(e.target.value)
            setDetail(e.target.value)
          }}
          className='mb-2 w-full'
        ></textarea>
        <button onClick={() => {
          // lista.push(item)
          // console.log(lista)
          // setTitle('')
          // }
        }}
          className="text-white font-bold bg-purple-500 hover:bg-purple-400 mb-1 w-full rounded-md"
        >Guardar</button>
      </form>
    </div>
  )
}

export default TaskForm