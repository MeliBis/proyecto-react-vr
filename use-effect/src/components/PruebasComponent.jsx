import React, { useEffect, useState } from 'react'
import AvisoComponent from './AvisoComponent'

const PruebasComponent = () => {
    const [usuario, setUsuario] = useState('Meli Barrios')
    const [fecha, setFecha] = useState('01-01-1998')
    const [ contador, setContador] = useState(0)

    const modUsuario= e => {
        setUsuario(e.target.value)
    }
    const cambiarFecha= e =>{
        setFecha(new Date().toLocaleDateString())
    }
    //solo se ejecuta 1 vez
    useEffect(()=> {
        console.log('has cargado el componente');
    },[])

//se ejecuta solo si cambio el usuario
useEffect(()=> {

    setContador(contador +1)
    console.log('has modificado el usuario: ' + contador);

},[fecha,usuario]);

  return (
    <div>
        <h1>El efecto useEffect</h1>
        <strong className={contador >=10 ? 'label label-green' : 'label'}>{usuario}</strong>
       <br/>
        <strong>{fecha}</strong>
        <br/>
        <p >
            <input type="text" 
                onChange={modUsuario} 
                placeholder='cambia el nombre' />
                <button onClick={cambiarFecha}>Cambiar fecha</button>
        </p>
        {usuario == "Melissa" && <AvisoComponent/>}
    </div>
  )
}

export default PruebasComponent