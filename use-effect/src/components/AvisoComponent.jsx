import React, { useEffect } from 'react'

const AvisoComponent = () => {
useEffect(()=>{
    //cuando el componente se monta
    alert('el componente aviso component esta montado')

    //cuando el componente se desmonta
    return ()=> {
        alert('componente desmontado')
    }

},[]); //se ejecuta una vez porque le paso el array vacio

  return (
    <div>
        <h3>Saludos Meli, ¿que tal estas?</h3>
        <button onClick={e =>{
            alert('Bienvenida')
        }}>Mostrar alerta</button>

    </div>
  )
}

export default AvisoComponent