import React, { useState } from 'react'

const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda]=useState('')
  const [noencontrado, setNoencontrado]= useState(false)
  const buscarPeli =(e)=>{
    // crear estado y actualizarlo
    setBusqueda(e.target.value);
    
    // el listado completo de peliculas

    //filtrar para buscar coincidencias
    let pelisEncontradas= listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase())
    } )
   
    if(busqueda.length <=1 || pelisEncontradas <= 0){
      pelisEncontradas = JSON.parse(localStorage.getItem("pelis"))
      setNoencontrado(true)
    }else{
      setNoencontrado(false)
    }
   
    
    //actualizar el estado del listado principal con lo que he logrado filtrar
    setListadoState(pelisEncontradas)

  }
  return (
    <div className="search">
    <h3 className="title">Buscador</h3>
    {(noencontrado == true && busqueda.length >1) && (
      <span className='no-encontrado'>no se ha encontrado ninguna coincidencia</span>
    )}
    <form>
        <input type="text" 
                id="search_field"
                name='busqueda'
                autoComplete='off' 
                value={busqueda}
                onChange={buscarPeli}
                />
        <button id="search">Buscar</button>
    </form>
</div>



  )
}

export default Buscador