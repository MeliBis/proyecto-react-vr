import React from 'react'
import {Routes, Route, BrowserRouter as Router, NavLink, Navigate} from 'react-router-dom'
import Inicio from '../componentes/Inicio'
import Contacto from '../componentes/Contacto'
import Curriculum from '../componentes/Curriculum'
import Servicios from '../componentes/Servicios'
import Portafolio from '../componentes/Portafolio'
import HeaderNav from '../componentes/layout/HeaderNav'
import Footer from '../componentes/layout/Footer'
import Proyecto from '../componentes/Proyecto'

const Rutas = () => {
  return (
    <Router>
        {/* header y navegacion */}
        <HeaderNav/>
        {/* contenido central */}
        <section className="content">
          <Routes>
              <Route path='/' element={<Navigate to='/inicio'/>} />
              <Route path='/inicio' element={<Inicio/>} />
              <Route path='/portafolio' element={<Portafolio/>} />
              <Route path='/servicios' element={<Servicios/>} />
              <Route path='/curriculum' element={<Curriculum/>} />
              <Route path='/contacto' element={<Contacto/>} />
              <Route path='/proyecto/:id' element={<Proyecto/>} />
              <Route path='/contacto' element={<Contacto/>} />
              <Route path='/*' element={
                <div className='page'>
                  <h1 className='heading'>Error 404</h1>
                </div>}
            />
          </Routes>
        </section>
        {/* pie de página */}
        <Footer/>
    </Router>
  )
}

export default Rutas