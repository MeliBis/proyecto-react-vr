import React, { useEffect, useLayoutEffect, useState } from 'react'

const EjemploComponente = () => {
    const [mostrar, setMostrar] = useState(false)
    
    useLayoutEffect(()=>{
        console.log('useLayoutEfect');
      /*   let caja= document.querySelector("#caja")
        caja.innerHTML= 'hola'
        console.log(caja.getBoundingClientRect());  *///sacar coordenadas y tamaño
    },[])
    useEffect(()=>{
        console.log('useEffect');
        /* let caja= document.querySelector("#caja")
        console.log(caja.getBoundingClientRect()); */ //sacar coordenadas y tamaño

    },[mostrar])

  return (
    <div>
        <h1>Ejemplo useEffect y useLayoutEffect</h1>
        <button onClick={()=> setMostrar(prev => !prev)}>Mostrar mensaje</button>
        
        {mostrar && (
            <div id='caja'>
                <h2>hola soy un mensaje</h2>
            </div>
        )}
    </div>
  )
}

export default EjemploComponente