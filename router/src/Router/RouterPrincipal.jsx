import React from 'react'
import {Routes, Route, NavLink, BrowserRouter as Router, Navigate} from 'react-router-dom'
import Inicio from '../components/Inicio'
import Contacto from '../components/Contacto'
import Articulos from '../components/Articulos'
import Error from '../components/Error'
import Persona from '../components/Persona'

export const RouterPrincipal = () =>{
  return (
    <Router>    

      <h2>cabecera</h2> 
      <hr />

      <nav>
        <ul className="menu">
          <li>
            <NavLink 
            to="/inicio"
            className={
              ({isActive})=> isActive ? "activado": ""}>
                Inicio</NavLink>
          </li>
          <li>
            <NavLink 
              to="/contacto"  
              className={
                ({isActive})=> isActive ? "activado": ""}>
                Contacto</NavLink>
          </li>
          <li>
            <NavLink 
            to="/articulos"
            className={
              ({isActive})=> isActive ? "activado": ""}>
                Articulos</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/articulos' element={<Articulos />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/persona/:nombre/:apellido' element={<Persona />} />
        <Route path='/persona/:nombre' element={<Persona />} />
        <Route path='/persona' element={<Persona />} />
        <Route path={'/redirigir'} element={<Navigate to="/persona/meli/barrios"/> } />
        <Route path='*' element={<Error/>} />

      </Routes>

    </Router>
  )
}

