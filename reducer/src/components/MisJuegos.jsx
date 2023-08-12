import React from 'react'
import { JuegoReduces } from '../reducers/JuegoReduces'
import { useReducer, useEffect } from 'react'

const init =()=>{
    return JSON.parse(localStorage.getItem("juegos")) || []
}
const MisJuegos = () => {
    const[juegos, dispatch] = useReducer(JuegoReduces,[], init);
    
    useEffect(()=>{
        localStorage.setItem('juegos', JSON.stringify(juegos));
    },[juegos])
 
    const conseguirDatosForm=e=>{
        e.preventDefault()

        let juego ={
            id:new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        }
        console.log(juego);
        const accion= {
            type:"crear",
            payload: juego
        }
        dispatch(accion)
        console.log(juegos);
    }

  return (
    <div>
        <h1>estos son mis videojuegos</h1>
        <p>Numero de videojuegos:15</p>
        <ul>
            <li>Zelda</li>
            <li>Mario Card</li>
            <li>Mario Odyssey</li>
        </ul>
        <h3>Agregar videojuego</h3>
        <form onSubmit={conseguirDatosForm}>
            <input type="text" name='titulo' placeholder='Titulo'/>
            <textarea name="descripcion" id="" cols="30" rows="10" placeholder='descripcion'></textarea>
            <input type="submit" name="guardar" id="" value='guardar' />
        </form>
    </div>
  )
}

export default MisJuegos