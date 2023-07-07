import React, { useState } from 'react'

const FormularioComponent = () => {
const [usuario, setUsuario]= useState({})

    const conseguirDatosFormulario= e =>{
        e.preventDefault()
        
        let datos= e.target;
        let usuario={
            nombre:datos.nombre.value,
            apellido: datos.apellido.value,
            genero:datos.genero.value,
            bio: datos.bio.value
        }
        console.log(usuario);
        setUsuario(usuario)
    }
   

  return (
    <>
 
        <h1>Formulario con React</h1>

    { usuario.bio && usuario.bio.length > 1 && 
    (
           <div className='info_usuario label label-gray'>
           {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografia es: <p>{usuario.bio}</p> 
       </div>
    )
    
    }

        <form onSubmit={conseguirDatosFormulario} action="">
            <input type="text" name="nombre" id="" placeholder='nombre'/>
            <input type="text" placeholder='apellido' name='apellido' />
            <select name="genero" id="" >
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
            </select>
            <textarea name="bio" id="" cols="30" rows="10" placeholder='Biografia'></textarea>

            <input type="submit" value="enviar" />
        </form>
    </>
  )
}

export default FormularioComponent