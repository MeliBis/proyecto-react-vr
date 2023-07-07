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
            bio: datos.bio.value,
            enviar:datos.enviar.value
        }
        console.log(usuario);
        setUsuario(usuario)
    }
   
    const cambiarDatos = e =>{
        let name_del_input = e.target.name;
        let usuario_para_modificar = usuario;  //copia del usuario

        //usuario_para_modificar[name_del_input]= e.target.value;

        setUsuario(estado_previo => ({
                ...estado_previo,
                [name_del_input]:e.target.value
            })
        )

        /*         if(name_del_input === "nombre"){
            usuario_para_modificar.nombre = e.target.value
        }
        if(name_del_input === "apellido"){

        }
        if(name_del_input === "genero"){

        }
        if(name_del_input === "bio"){

        }
 */    

    }
  return (
    <>
 
        <h1>Formulario con React</h1>

    { usuario.bio && 
    (
           <div className='info_usuario label label-gray'>
           {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografia es: <p>{usuario.bio}</p> 
       </div>
    )
    
    }

        <form onSubmit={conseguirDatosFormulario} action="">
            <input type="text" 
            name="nombre" id="" 
            placeholder='nombre'
            onChange={cambiarDatos}
            />
            <input type="text" 
            placeholder='apellido' 
            name='apellido' 
            onChange={cambiarDatos}
            />

            <select name="genero" id=""
            onChange={cambiarDatos}
            >
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
            </select>
            <textarea 
            name="bio" 
            id="" 
            cols="30" 
            rows="10" 
            placeholder='Biografia'
            onChange={cambiarDatos}
            ></textarea>

            <input type="submit" value="enviar" name='enviar'/>
        </form>
    </>
  )
}

export default FormularioComponent