import React,{useState,useRef, useEffect} from 'react'
import {Empleados} from './Empleados'

const Gestion = () => {
    const [nombre, setNombre] = useState('')
    const gestorInput =useRef()
    useEffect(()=>{
        console.log('la vista se ha renderizado');
    })

    
    const asignarGestor =e =>{
        setNombre(gestorInput.current.value);
    }
  return (
    <div>
        <h1>Nombre de la líder: {nombre}</h1>
        <input type="text" ref={gestorInput} onChange={asignarGestor} placeholder='introduce tu nombre de gestor' />
        <h2>Lista de aliados: </h2>
        <p>Los usuarios son gestionados por {nombre} vienen de jsonplaceholder...</p>
        <Empleados/>
    </div>
  )
}

export default Gestion