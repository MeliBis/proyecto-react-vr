import React from 'react'
import {trabajos} from './data/trabajos'
import { Link } from 'react-router-dom'
import ListadiTrabajos from './ListadiTrabajos'

const Portafolio = () => {
  return (
    <div className='home' >
      <h1 className='heading'>Portafolio</h1>
      
      <ListadiTrabajos/>
        
    </div>
  )
}

export default Portafolio