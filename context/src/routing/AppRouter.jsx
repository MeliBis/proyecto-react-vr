import React, { useContext } from "react";
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Inicio from "../components/Inicio";
import Articulos from "../components/Articulos";
import Acerca from "../components/Acerca";
import Contacto from "../components/Contacto";
import Login from "../components/Login";
import App from "../App";
import { PruebaContext } from "../context/PruebaContext";

const AppRouter = () => {
  const {usuario, setUsuario}= useContext(PruebaContext)

  return (
    <Router>
      <header className="header">
        <nav>
          <div className="logo">
            <h2>Aprendiendo react context</h2>
          </div>
          <ul>
            <li>
                <NavLink to='/inicio'>Inicio</NavLink>
            </li>
            <li>
                <NavLink to='/articulo'>Articulos</NavLink>
            </li>
            <li>
                <NavLink to='/contacto'>Contacto</NavLink>
            </li>
           
              {usuario.hasOwnProperty("nick") && usuario.nick !== null ? (
                <>
                  <li>
                    <NavLink to='/inicio'>{usuario.nick}</NavLink>
                  </li>
                
                  <li>
                    <a href="#" onClick={e =>{
                      e.preventDefault()
                      setUsuario({})
                    }}>Cerrar sesion</a>
                  </li>
                </>
              ):(
                <li>
                    <NavLink to='/login'>identificate</NavLink>
                </li> 
              )}
          </ul>
        </nav>
        </header>
    
    <section className="content">
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/articulo" element={<Articulos />} />
        <Route path="/acerca-de" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="*"
          element={
            <div>
              <h1>error 404</h1>
            </div>
          }
        />
      </Routes>
    </section>
    </Router>
  );
};

export default AppRouter;
