import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

const Contacto = () => {
  

  const datoDesdeElContexto = useContext(PruebaContext)
  
  return (
    <div>
      <h1>Contacto</h1>
      <p>pagina de contacto</p>
      <p>valor compartido: <pre>{JSON.stringify(datoDesdeElContexto.usuario)}</pre></p>
    </div>
  )
}

export default Contacto