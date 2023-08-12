import React, { useId } from 'react'

const MiComponente = () => {
    const id= useId()
    const segundoid=useId()
    
    console.log(id,segundoid);
  return (
    <div>
        <h1>Hook use Id</h1>
        <input id={id} name='nombre' placeholder='nombre' />
    </div>
  )
}

export default MiComponente