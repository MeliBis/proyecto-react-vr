import logo from './logo.svg';
import './App.css';
import AppRouter from './routing/AppRouter';
import { PruebaContext } from './context/PruebaContext';
import { useEffect, useState } from 'react';

function App() {
  const [usuario, setUsuario]= useState({})

    useEffect(()=>{
      localStorage.setItem("usuario", JSON.stringify(usuario))
    },[])
   const curso={
    id:1,
    titulo:"master en typescript",
    contenido: "muchas horas de contenido"
  } 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aprendiendo el useContaxt</h1>
        
        <PruebaContext.Provider value={{
          usuario,
          setUsuario
        }}>
          <AppRouter/>
        </PruebaContext.Provider>
      </header>
    </div>
  );
}

export default App;
