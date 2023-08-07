import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, Soy <strong>Melissa Barrios</strong>  y  soy <strong>Full Stack Developer </strong>  y ofrezco mis servicios de programación y desarrollo web. También puedes contactarme si deseas aprender desde lo basico de programación.
      </h1>
      <h2>Te ayudo a crear tu sitio web. <Link to='/contacto'>Contáctame</Link> </h2>

      <ssection className="last-works">
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos como programadora</p>

        <div className="works">

        </div>
      </ssection>
    </div>
  )
}

export default Inicio