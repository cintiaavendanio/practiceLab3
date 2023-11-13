import { useState } from 'react'
import './App.css'
import Login from './Login'
import TaskList from './task'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [login, setLogin] = useState(false)
  const cerrarSesion = () => {
    setShowLogin(false)
    setLogin(false)
  }

  return (
    <>
      {!showLogin && (
        <button
          onClick={() => {
            setShowLogin(true)
          }}
        >
          Iniciar Sesion
        </button>
      )}
      {showLogin && !login && <Login setLogin={setLogin} />}
      {login && <button onClick={cerrarSesion}>Cerrar sesion</button>}
      {login && <TaskList />}
    </>
  )
}

export default App
