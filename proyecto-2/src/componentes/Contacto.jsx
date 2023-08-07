import React from 'react'

const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='mailto:"melissa.blecona@gmail.com'>
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellidos' />
        <input type="email" placeholder='Email' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Motivo de contacto'/>
        <input type="submit" value="Enviar" />
      </form>
  </div>
  )
}

export default Contacto