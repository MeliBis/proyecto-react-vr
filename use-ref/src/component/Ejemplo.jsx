import React, { useEffect, useState,useRef } from 'react'

const Ejemplo = () => {
    const [numeroSaludo, setNumeroSaludo] = useState(0)
    const saludospendientes= useRef(numeroSaludo)

    useEffect(()=>{
        saludospendientes.current=numeroSaludo;
        setTimeout(()=>{
            console.log('mensajes pendientes: '+saludospendientes.current);
        },2000)
    })
    const enviarSaludo=(e)=>{
        setNumeroSaludo(numeroSaludo+1)
    }
  return (
    <div>
        <hr />
        <h2>ejemplo con useRef</h2>
        <h3>saludos enviados {numeroSaludo}</h3>
        <button onClick={enviarSaludo}>Enviar saludo</button>
    </div>
  )
}

export default Ejemplo