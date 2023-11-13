import { useEffect } from 'react'
import { useState } from 'react'

const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState()

  console.log(tasks)

  useEffect(() => {
    const localTask = localStorage.getItem('tasks')
    if (localTask) setTasks(JSON.parse(localTask))
  }, [])

  const agregarTarea = () => {
    setTasks((prevTasks) => {
      const newTasksAux = [...prevTasks]
      newTasksAux.push({ text: newTask, complete: false })
      localStorage.setItem('tasks', JSON.stringify(newTasksAux))
      return newTasksAux
    })
  }

  const completeTask = (taskIndex) => {
    setTasks((prevTasks) => {
      const newTasksAux = [...prevTasks]
      newTasksAux[taskIndex].complete = true
      localStorage.setItem('tasks', JSON.stringify(newTasksAux))
      return newTasksAux
    })
  }

  const deleteTask = (taskIndex) => {
    setTasks((prevTasks) => {
      const newTasksAux = [...prevTasks]
      newTasksAux.splice(taskIndex, 1)
      localStorage.setItem('tasks', JSON.stringify(newTasksAux))
      return newTasksAux
    })
  }

  return (
    <div>
      <h1>Lista de tareas</h1>
      {tasks.length === 0 && <p>Ninguna tarea cargada</p>}
      {tasks.length > 0 && (
        <ol>
          {tasks.map(({ text, complete }, index) => {
            console.log({ complete })
            return (
              <li key={text} style={{ display: 'flex', gap: '20px' }}>
                <p>{text}</p>
                {!complete && (
                  <p
                    onClick={() => {
                      completeTask(index)
                    }}
                  >
                    🔲
                  </p>
                )}
                {complete && <p>✅</p>}
                <p
                  onClick={() => {
                    deleteTask(index)
                  }}
                >
                  ❌
                </p>
              </li>
            )
          })}
        </ol>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2>Nueva tarea</h2>
        <input
          type='text'
          placeholder='Hacer las compras'
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value)
          }}
        />
        <button onClick={agregarTarea}>Agregar la tarea</button>
      </div>
    </div>
  )
}

export default TaskList
