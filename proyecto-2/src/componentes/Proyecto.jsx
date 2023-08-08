import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {trabajos} from "../componentes/data/trabajos"

const Proyecto = () => {
    const [proyecto, setProyecto] = useState("")
    useEffect(()=>{
        let proyecto= trabajos.filter(trabajo => trabajo.id === params.id)
        setProyecto(proyecto[0])
    },[])
    const params=useParams();

  return (
    <div className="page page-work">
      <h1 className="heading">{proyecto.nombre}</h1>
    <p>{proyecto.tecnologias}</p>
    <p>{proyecto.descripcion}</p>
    <Link to={"https://"+proyecto.url} target="blank">Ir al proyecto</Link>
    </div>
  );
};

export default Proyecto;
