import React, { useState } from 'react'
import { useMayus } from '../hooks/useMayus'

const PruebasCustom = () => {
/*     const [miTexto, setMiTexto] = useState("Meli Barrios")
 */    
    const {estado,mayusculas, minusculas,concatenar} =useMayus("Meli Barrios")
    
    
  return (
    <div>
        <h1>Probando componentes personalizados</h1>
          
          <h2>{estado}</h2>
        
        <button onClick={mayusculas}>Poner mayusculas</button>
        <button onClick={minusculas}>Poner minusculas</button>
        <button onClick={e => concatenar(" - probando hooks personalizados -")}>Concatenar</button>
    </div>
  )
}

export default PruebasCustom