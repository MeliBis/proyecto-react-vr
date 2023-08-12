import React, { useState } from 'react'

const Tareas = () => {
    const [tareas,setTareas]= useState([])
    const [contador, setContador] = useState(0)
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
    const sumarAlContador= e =>{
        setContador(contador+1)
    }
    const contadoresPasados= (acululacion) =>{
        for(let i=0; i<= acululacion;i++){
            console.log('ejecutando acumuladores del pasado...');
        }
        return `contador manual de tareas ${acululacion}`
    }
  return (
    <div className='tareas-container'>
        <h1>Mis tareas</h1>
        <form onSubmit={guardarTareas}>
            <input type="text" name='descripcion' placeholder='Describe la tarea' />
            <input type="submit" value="guardar" />
        </form>
        <h3>{contadoresPasados(contador)}</h3>
        <button onClick={sumarAlContador}></button>
        <hr />
        <h3>Lista de tareas</h3>
        <ul className=''>
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