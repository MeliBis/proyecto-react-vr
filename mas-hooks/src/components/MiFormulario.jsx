import { useForm } from '../hooks/useForm'

const MiFormulario = () => {
const {formulario, enviado, cambiado} = useForm({})

  return (
    <div className='container'>
        <h1>formulario</h1>
        <p>formulario para guardar un curso</p>
        <p>curso guardado: {/* {formulario.titulo} */}</p>
        <pre className='codigo'>{JSON.stringify(formulario)}</pre>

        <form className='mi-formulario' onSubmit={enviado}>
            <input type="text" name='titulo' onChange={cambiado} placeholder='titulo'/>
            <input type="number" name="anio" onChange={cambiado} placeholder='año de publicacion'/>
            <textarea name="descripcion" onChange={cambiado} cols="30" rows="10" placeholder='descripcion'></textarea>
            <input type="text" name='autor' onChange={cambiado} placeholder='autor' />
            <input type="email" name="email" onChange={cambiado} placeholder='correo de contacto' />
            <input type="submit" value="enviar" />
        </form>
    </div>
  )
}

export default MiFormulario