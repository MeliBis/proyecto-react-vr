import React from 'react'
import {trabajos} from './data/trabajos'
import { Link } from 'react-router-dom'
const ListadiTrabajos = () => {
  return (
      <section className='works'>
      {
        trabajos.map(trabajo =>{
         return(
          <article key={trabajo.id} className='work-item'>
            <div className='mask'>
              <img src={"../../public/images"+trabajo.id+".png"} alt="" />
            </div>
          <span>{trabajo.categoria}</span>
          <h2><Link to={"/proyecto/"+trabajo.id}></Link>{trabajo.nombre}</h2>
          <h3>{trabajo.tecnologias}</h3>

        </article>
           )
      })}
      </section>
        

  )
}

export default ListadiTrabajos