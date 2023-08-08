import React, { useState } from 'react'

const Tareas = () => {
    const [tareas,setTareas]= useState([])

    const guardarTareas = e =>{
        e.preventDefault()

        let tareas_actualizadas = [...tareas, e.target.descripcion.value]
        setTareas(tareas_actualizadas);
        console.log(tareas);
    }
    const borrarTarea=(id)=> {
        //filtar las tareas para borrar la que no quiero
        let nuevas_tareas = tareas.filter((tarea, index) => index !== id)
        
        //set state, guardad el nuevo listado de tareas en el estado
        setTareas(nuevas_tareas)
    }
  return (
    <div className='tareas-container'>
        <h1>Mis tareas</h1>
        <form onSubmit={guardarTareas}>
            <input type="text" name='descripcion' placeholder='Describe la tarea' />
            <input type="submit" value="guardar" />
        </form>
        <hr />
        <h3>Lista de tareas</h3>
        <ul className='tareas'>
            {
                tareas.map((tarea,index)=>{
                    return( <li key={index}>{tarea}
                    &nbsp;
                    <button onClick={()=> borrarTarea(index)}>x</button></li>)
                })
            }

        </ul>
    </div>
  )
}

export default Tareas