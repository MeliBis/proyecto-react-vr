import React from 'react'
import MiComponente from './components/MiComponente'
import PruebasCustom from './components/PruebasCustom'
import MiFormulario from './components/MiFormulario'
import MiUsuario from './components/MiUsuario'

const App = () => {
  return (
    <div>
      <MiComponente/>
      <hr/>
      <PruebasCustom/>
      <hr/>
      <MiFormulario/>
      <hr/>
      <MiUsuario/>
    </div>
  )
}

export default App