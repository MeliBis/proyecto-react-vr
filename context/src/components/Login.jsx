import React,{useContext} from 'react'
import { PruebaContext } from '../context/PruebaContext'

const Login = () => {
  //const [usuario, setUsuario]= useContext(PruebaContext)

  const guardarDatos= e =>{
    e.preventDefault()

   let usuarioIdentificado={
    nick:e.target.nick.value,
    nombre: e.target.nombre.value, 
    web:e.target.web.value
   }
   //setUsuario(usuarioIdentificado)
  }
  return (
    <div>
      <h1>Login</h1>
      <p>pagina de login</p>

      <form className='login' onSubmit={guardarDatos}>
        <input type="text" name='nick' placeholder='Nickname' />
        <input type="text" name='nombre' placeholder='nombre' />
        <input type="text" name='web' placeholder='Web' />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Login