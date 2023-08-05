import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1>error 404</h1>
        <strong>esta pagina no existe</strong>
        <Link to="/inicio">volver al inicio</Link>
    </div>
  )
}

export default Error