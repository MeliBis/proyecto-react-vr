import React, { useState } from 'react'

const Crear = () => {
    const tituloComponente= "Añadir película";

    const [peliState, setPeliState] = useState({
        titulo:'',
        descripcion:''
    })

    const {titulo, descripcion}= peliState;

    const conseguirDatosForm = e =>{
        e.preventDefault()
        
        //conseguir datos del formulario
        let target= e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //crear objeto de la pelicula a guardaar
        let peli={
            id: new Date().getTime(),
            titulo,
            descripcion
        }
        //guardar estado
        setPeliState(peli)

        //guardar en el amacenamiento local
        localStorage.setItem('peli', JSON.stringify([peli]));  
      }

    const guardarEnStorage= peli =>{
    //conseguir los elementos que ya tenemos en localStorage
        let elementos= JSON.parse(localStorage.getItem("pelis"))
    //comprobar si es un array
        if(Array.isArray(elementos)){
    //guardar dentro del array un elemento nuevo
            elementos.push(peli)
        }else{
            //crear un array con la nueva peli
            elementos = [peli];
        }
        console.log(elementos);
    //guardar en el localStorage 
        localStorage.setItem("pelis", JSON.stringify(elementos))
    //devolver objeto
        return peli
    //localStorage.setItem("pelis", JSON.stringify([peli]))
}

  return (
    <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            <strong>
                {(titulo && descripcion)&& "haz creado la pelicula : " +titulo}            

            </strong>
            <form onSubmit={conseguirDatosForm}>
                <input type="text"  
                        id="titulo" 
                        name='titulo'
                        placeholder="Titulo" 
                        />
                <textarea 
                            id="descripcion" 
                            name='descripcion'
                            placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>

        </div>
  )
}


export default Crear