import Listado from './components/Listado.jsx'

function App() {
  return (
    <div className="layout">
   {/* Cabecera */}
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        
        <h1>MisPelis</h1>
    </header>

   {/* Barra de navegación */}
    <nav className="nav">
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Peliculas</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contacto</a></li>
        </ul>
    </nav>

   {/* Contenido principal */}
    <section id="content" className="content">

    {/* aqui van ell listado de peliculas */}
     
        
    </section>

   {/* Barra lateral */}
    <aside className="lateral">
        <div className="search">
            <h3 className="title">Buscador</h3>
            <form>
                <input type="text" id="search_field" />
                <button id="search">Buscar</button>
            </form>
        </div>

        <div className="add">
            <h3 className="title">Añadir pelicula</h3>
            <form>
                <input type="text" id="title" placeholder="Titulo" />
                <textarea id="description" placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    </aside>

  {/* Pie de página */}
    <footer className="footer">
        &copy; Meli Barrios <a href="/">melicornio</a>
    </footer>

</div>
  );
}

export default App;
