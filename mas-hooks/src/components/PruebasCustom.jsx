import React from 'react'
import { useMayus } from '../hooks/useMayus'

const PruebasCustom = () => {
    const {mayusculas, minusculas,concatenar} =useMayus("meliscript")
    console.log(mayusculas("hola"));
    console.log(minusculas("SEEEEEE"));
    console.log(concatenar('siente'));
  return (
    <div>
        <h1>Probando componentes personalizados</h1>

    </div>
  )
}

export default PruebasCustom