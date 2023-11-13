import { useState } from 'react'

const Login = () => {
  const [userName, setUserName] = useState()

  const registrar = () => {
    if (!userName) {
      return alert('Usuario inválido para registrarse')
    }
    if (userName.toLowerCase().includes('o')) {
      return alert('Usuario inválido para registrarse')
    }
    alert('¡Usuario registrado correctamente!')
  }

  return (
    <div>
      <input
        type='text'
        value={userName}
        onChange={(event) => {
          if (event.target.value.toLowerCase().includes('o')) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!')
          }
          setUserName(event.target.value)
        }}
      />
      <button onClick={registrar}>Registrarse</button>
      <p>{userName}</p>
    </div>
  )
}

export default Login
