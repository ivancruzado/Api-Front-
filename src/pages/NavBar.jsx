import { IconButton } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MyDropdown from '../components/DropDown'; 
import { useAuth } from "./ContextoGlobal";

export function NavBar(){
  const[userId,setUserId] = useState(null);
  const { authenticated } = useAuth();
  useEffect(()=>{
    const loggedUser = window.localStorage.getItem('loggedUser');
    if (loggedUser){
      const user = JSON.parse(loggedUser)
      setUserId(user.loginUser.user._id)
    }
  },[authenticated])
  return(
  <nav className= "py-5 fixed  w-full bg-gray-300 rounded-full rounded-t-none " >
      <ul className=" grid grid-cols-5 text-black font-extrabold w-full px-4 lg:mx-0  lg:px-40"> 
        <div className="flex py-2 col-span-2 text-end gap-3 justify-end lg:justify-start pl-2  lg:text-3xl  mt-1 md:mt-0 md:text-xl md:gap-11 lg:gap-36 ">
        {authenticated ? <li ><Link to={`/PerfilUsuario/${userId}`} className="">Usuario</Link></li> : ""}
          <li className="text-start"><Link to = "/Publicaciones/all">Buscar Clases</Link></li>
        </div>
        <div className="text-center">
        <IconButton className = "flex justify-center"size="small" component={Link} to="/">
          <SchoolIcon color="primary" fontSize="large" size="small" />
        </IconButton>
        </div>
        <div className="flex  py-2 col-span-2 lg:justify-end  md:text-xl gap-4 mt-1 md:mt-0 lg:text-3xl md:gap-11 lg:gap-36 ">
        
          
          {authenticated ? "" : <li><Link to = "/Registro">Registro</Link></li>}
          {authenticated ? "" : <li><Link to = "/login">Login</Link></li>}
          {authenticated ? <li></li> : ""}
          {authenticated ? <li><MyDropdown></MyDropdown></li> : ""}
        </div>
      </ul>
  </nav>
    )
}