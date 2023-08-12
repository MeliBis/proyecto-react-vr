import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

const Inicio = () => {
  const {usuario, setUsuario} = useContext(PruebaContext)
  //onst compartida= useContext(PruebaContext)
  //console.log(compartida);

  return (
    <div>
      <h1>Inicio</h1>
      <p>Nombre: {usuario.nombre} {usuario.web}</p>

{/*       <p>pagina de inicio: <strong>{compartida.titulo}</strong></p>
 */}    </div>
  )
}

export default Inicio