import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

const Crear = ({setListadoState}) => {
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
        setPeliState(peliState)
        
       //actualizar estado del listado principal
        setListadoState(elementos => {
            return [...elementos, peli]
        }) 
        //actualizar estado del listado
        setPeliState(peli)

        //guardar en el al almacenamiento local
        localStorage.setItem('pelis', JSON.stringify([peli]));  
        GuardarEnStorage("peli", peli);
        //GuardarEnStorage("copia_datos", peli)
      }
     
  return (
    <div className="add">
            <h3 className="title">{tituloComponente}</h3>

            <strong>
                {(titulo && descripcion) && "has creado la pelicula: " + titulo}            
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