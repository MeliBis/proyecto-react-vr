import './App.css';
import {Empleados} from './components/Empleados';
import Gestion from './components/Gestion';
import Tareas from './components/Tareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    {/* ejercicio con hook useMemo */}
    <Tareas/>

      {/* ejercicio con metodo memo por componentes */}
        {/*<Gestion/>*/}        
      </header>
    </div>
  );
}

export default App;
