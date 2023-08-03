export const GuardarEnStorage= (clave, elemento) =>{
    //conseguir los elementos que ya tenemos en localStorage
        let elementos= JSON.parse(localStorage.getItem(clave))
    //comprobar si es un array
        if(Array.isArray(elementos)){
    //guardar dentro del array un elemento nuevo
            elementos.push(elemento)
        }else{
            //crear un array con elemento
            elementos = [elemento];
        }
        console.log(elementos);
    //guardar en el localStorage 
        localStorage.setItem(clave, JSON.stringify(elementos))
    //devolver objeto
        return elemento;
    //localStorage.setItem("elementos", JSON.stringify([elemento]))
}
