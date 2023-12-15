import { Route, Routes } from "react-router-dom";
//import { Clases } from "./pages/Clases";

import { NavBar } from "./pages/NavBar";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import {Perfil} from "./pages/Perfil";
//import { Usuario } from "./pages/usuario";
//import { Perfil } from "./pages/PerfilUsuario";
import { BusquedaClases } from "./pages/BusquedaClases";
//import PublicacionDetalle from "./pages/PublicacionDetalle";
//import Inicio from "./pages/Inicio";
import Olvido from "./pages/olvidoContra";
import ClaseDetalle from "./pages/ClaseDetalle";
import { useContext } from "react";
import { Context } from "./pages/Context";
import Opiniones from "./pages/ComentariosTab";
import Contactos from "./pages/ContactoTab";
import CambioContraseña from "./pages/CambiarContraseña";



function App(){
  
  const loggedUser = window.localStorage.getItem('authenticated');
  return(
      <Routes > 
        <Route path="/" element= {
          <>

          <Inicio></Inicio>
          </>
          }>
        </Route>   
        <Route path = "/login" element={
          <>

          <Login></Login>
          </>
        }>
        </Route>
        <Route path = "/Registro" element={
          <>

          <Registro/>
          </>
        }>
        </Route>
        <Route path = "/Publicaciones/:busqueda" element={
            <BusquedaClases></BusquedaClases>
      }/>
         <Route path = "/Publicacion/:PubliId" element={
          <>
            <ClaseDetalle/>
          </>
        }>
        </Route>
        <Route path = "/PerfilUsuario/:UsuarioId" element={
          <>
          <Perfil/>
          </>
        }>
        </Route>
        <Route path = "/ForgotPassword" element={
          <>
          <Olvido/>
          </>
        }>
        </Route>
        <Route path = "/Opiniones/:UsuarioId" element={
          <>
          <Opiniones/>
          </>
        }>
        </Route> 
        <Route path = "/Contactos/:UsuarioId" element={
          <>
          <Contactos/>
          </>
        }>
        </Route>
        <Route path = "/reset-password/:token" element={
          <>
          <CambioContraseña/>
          </>
        }>
        </Route>     
      </Routes>
      
      
  )
}

export default App;
