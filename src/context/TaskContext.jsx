import { createContext, useState, useEffect } from 'react'
import { listado as list } from '../data/tasks.js'

// manejo de datos
export const TaskContext = createContext()

// engloba los componentes
export function TaskContextProvider(props) {

    const [shores, setShores] = useState([])
    // const [lyear, setLyear] = useState('')

    function createShore(dato) {
        if (dato.title != '' && dato.detail != '') {

            let item = {
                id: 0,
                title: '',
                description: ''
            }
            item.id = shores.length
            item.title = dato.title
            item.description = dato.detail

            setShores([...shores, item])
        }
    }

    function deleteShore(itemId) {
        let updated = shores.filter(el => el.id !== itemId)
        setShores(updated)
    }

    // function leapYear(year) {
    // }
// }
useEffect(() => {
    setShores(list)
}, [])

return ( // {valor} es equivalente a {atributo: valor}
    <TaskContext.Provider value={{
        shores,
        createShore,
        deleteShore
        // leapYear
    }}>
        {props.children}
    </TaskContext.Provider>
)
}
