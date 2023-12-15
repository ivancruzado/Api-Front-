import { useState } from "react";
import { NavLink } from "react-router-dom";

function Content(){
    const[busqueda,setBusqueda] = useState("");
    
    const handleBusqueda = (e) =>{
        e.preventDefault();
        setBusqueda(e.target.value)
    }

    return(
        <form  className = "flex flex-row gap-5 h-full items-center justify-center text-center " autoComplete="off" name="busqueda">
            <input value = {busqueda} type="text" className="lg:w-9/12 w-7/12 rounded-xl h-9 pl-2" name = "search" autoComplete = "off" placeholder="Escribe aca.."
            onChange={handleBusqueda} id="standard-busqueda"/>
            <NavLink to= {busqueda ? `/Publicaciones/${busqueda}` : "/Publicaciones/all" }><button type ="submit"  className="bg-slate-800 rounded-md w-28 h-7 text-sm font-medium text-white px-9 py-1 inline-block text-center
             hover:text-black hover:bg-white transition-colors " >Buscar</button></NavLink>
        </form> 
    )
}

export default Content;