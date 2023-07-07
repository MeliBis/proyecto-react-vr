import React, { useEffect, useState } from 'react'


const Ajax = () => {
    const [usuarios, setUsuarios] = useState([])
    //generico / basico
    const getUsuariosEstaticos= ()=> {
        setUsuarios([
            {
                "id": 1,
                "email": "melissa.lawson@reqres.in",
                "first_name": "Melissa",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
              },
              {
                "id": 2,
                "email": "cata.ferguson@reqres.in",
                "first_name": "Cata",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
              },
              {
                "id": 3,
                "email": "micaela.funke@reqres.in",
                "first_name": "Micaela",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
              },
              {
                "id": 4,
                "email": "salomons.fields@reqres.in",
                "last_name": "Salomon",
                "avatar": "https://reqres.in/img/faces/10-image.jpg"
              }
        ])
    }

    const getUsuariosAjaxPms = ()=> {
        fetch('https://reqres.in/api/users?page=1')
        .then(respuesta => respuesta.json())
        .then(resultado_final =>{
            setUsuarios(resultado_final.data)
            console.log(usuarios);
            
        },
        error =>console.error("Error al obtener los datos del servidor:", error))
    }

    useEffect(()=>{
        getUsuariosAjaxPms()
    },[])
  return (
    <div>
        <h2>Listado de usuarios Ajax</h2>
        <ol>
            {
                usuarios.map(usuario =>{
                    console.log(usuario);
                    
                    return <li key={usuario.id}>{usuario.first_name}</li>
                })
            }
        </ol>
    </div>
  )
}

export default Ajax