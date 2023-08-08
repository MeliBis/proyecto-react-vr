import React, {useRef} from 'react'

const Formulario = () => {
  const nombre = useRef()
  const apellido = useRef()
  const email = useRef()

  const mostrar=(e)=>{
    e.preventDefault();

    console.log(nombre.current.value);
    console.log(email.current.value);
    console.log(apellido.current.value);
  }
  return (
    <div className=''>
        <h1 >Formulario</h1>
        <form onSubmit={mostrar}>
            <input type="text" placeholder='nombre' ref={nombre}/><br />
            <input type="text" placeholder='apellidos' ref={apellido} /><br />
            <input type="email" placeholder='email' ref={email}/><br />

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Formulario