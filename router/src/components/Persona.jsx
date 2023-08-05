import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Persona() {
    //valores por defecto en parametros opcionales
   //const {nombre= 'Meli', apellido='Barrios'} = useParams();

/* if(!nombre){
    nombre="Meli";
}
if(!apellido){
    apellido= "Barrios"
} */
const {nombre, apellido} = useParams();
const navegar = useNavigate();

const enviar = (e)=>{
  e.preventDefault();
  let nombre = e.target.nombre.value;
  let apellido = e.target.apellido.value;
  let url = `/persona/${nombre}/${apellido}`

  if(nombre.length <=0 && apellido.length <=0){
    navegar("/inicio")
  }else if(nombre === "contacto"){
    navegar("/contacto")
  }
  else{
    //redirigir a persona/nombre/apellido
    navegar(url)

  }
}
  return (
    <div>
        {!nombre && <h1>No hay ninguna persona que moostrar</h1>}
        {nombre && <h1>Pagina de persona: {nombre} {apellido}</h1>}

        <h1>pagina de persona {nombre} {apellido}</h1>
        <p>esta es la pagina de persona</p>
        
        <form onSubmit={enviar}>
          <input type="text"name='nombre'/>
          <input type="text"name='apellido'/>
          <input type="submit" value="Enviar"name='enviar' />
        </form>
    </div>
  )
}

export default Persona