import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const PanelControl = () => {
  return (
    <div>
       <h1>Panel de control</h1> 
       <p>Elige una de estas opciones</p>
        <nav>
            <ul>
                <li>
                    <NavLink to="inicio">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="crear-articulos">Crear articulo</NavLink>
                </li>
                <li>
                    <NavLink to="gestion-usuarios">Gestion usuarios</NavLink>
                </li>
                <li>
                    <NavLink to="acerca-de">Acerca de</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            {/* quiero cargar aqui los componentes de las subrutas */}
            <Outlet/>
        </div>
    </div>
  )
}

export default PanelControl