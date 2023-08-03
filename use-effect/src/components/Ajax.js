import React, { useEffect, useState } from 'react'


const Ajax = () => {
    const [usuarios, setUsuarios] = useState([])
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("")
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

    const getUsuariosAjaxAW =  ()=> {
      setTimeout(async()=>{
        try{
          const peticion = await fetch('https://reqres.in/api/users?page=2');
          const {data} = await peticion.json();
    
          setUsuarios(data)
          setCargando(false);  

        }catch(error){
          console.log(error);  
          setErrores(error.message)    
        }
     },5000)
    }

    useEffect(()=>{
        //getUsuariosAjaxPms()

        getUsuariosAjaxAW()
    },[])

    if(errores !== ""){
      //cuando pasa un error
      return(
        <div className="errores">
          {errores}
        </div>)
    } else if(cargando === true){
      //cuando todo esta cargando
      return(
        <div className="cargando">
          Cargando datos...
        </div>
      )
    }else if(cargando === false && errores ==="")
      //cuando todo ha ido bien

      return (
        <div>
            <h2>Listado de usuarios Ajax</h2>
            <ol>
                {
                    usuarios.map(usuario =>{
                        
                        return <li key={usuario.id}>
                        <img src={usuario.avatar} width={80}/>
                         <br/>
                          {usuario.first_name} 
                                      {usuario.last_name}</li>
                    })
                }
            </ol>
        </div>
      )
    }



  


export default Ajax