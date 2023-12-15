import { Alert, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { Link, Navigate} from "react-router-dom"
import {registro} from "../controllers/miApp.controller";
import PubliService from '../controllers/Publicaciones';
import { useAuth } from './ContextoGlobal';


export default function Registro(){
    const { authenticated, login } = useAuth();
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[name,setName]=useState('');
    const[telefono,setTelefono]=useState('');
    const[titulo,setTitulo]=useState('');
    const[experiencia,setExperiencia]=useState('');
    const[usuarioValido,setUsuarioValido]=useState(false);
    const[user,setUser] = useState(null);
    
    useEffect(()=>{
      const loggedUser = window.localStorage.getItem('loggedUser');
      if (loggedUser){
        const user = JSON.parse(loggedUser)
        setUser(user)
        login();
      }
    },[login])


    const handleEmail=(event)=>{
        setEmail(event.target.value);
    }
    const handlePassword=(event)=>{  
        setPassword(event.target.value);
    }
    const handleNombre=(event)=>{    
        setName(event.target.value);
    }
    const handleTelefono=(event)=>{    
        setTelefono(event.target.value);
    }
    const handleExperiecia=(event)=>{    
      setExperiencia(event.target.value);
  }
  const handleTitulo=(event)=>{    
    setTitulo(event.target.value);
  }

    //Ejecuto el endopoint para validar login
    const validarLogin= async(e) =>
    {
      if (!email.includes('@')) {
        // Mostrar un mensaje de error o realizar alguna acción adicional
        alert('debe poner un correo electronico valido');
        return;
      }
      try{
    const datos = await registro({
      email,
      password,
      name,
      telefono,
      experiencia,
      titulo
  })

      
      //setUsuarioValido(true);
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(datos)
      )
      PubliService.setToken(datos.loginUser.token)
      setUser(datos)
      setEmail("")
      setPassword("")
      login();}
      catch(error){
        console.error('Error en el registro:', error);
        if (error.response && error.response.status === 400) {
          alert('El email ya esta registrado');
      }   else {
      alert('Error en el registro. Inténtalo de nuevo.');
      }
      }
    
      
    }

     //Valido campos y llamo endpoint
    const RegistroUser=()=>
    {
    if (email!=="" && password!=="" && name !== "" && telefono !== "" && experiencia !== "" && titulo !== "")
    {
      validarLogin();
    }
    else
    {
      alert("Debe completar todos los campos");

    }}
    
    
    const usuarioCorrecto = () =>{
      return(
        <Navigate to={`/PerfilUsuario/${user.loginUser.user._id}`}></Navigate>
      )
    }

    return (

        <div className="items-center flex justify-center pt-60 pb-24 w-full h-full" autoComplete="off" name="Registro">
          <div className=' bg-gray-300 rounded-xl justify-center items-center w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-40 '>
            <h1 className='text-center py-12 text-3xl font-extrabold'>Registro</h1>
            <div className = "flex flex-col px-20 gap-11">
            <Box component="form" sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
            }}
            
            className='flex justify-center flex-col items-center gap-2'
            noValidate
            autoComplete="off"
            >
            <TextField  label="Nombre" variant="standard"  autoComplete="off"
            inputProps={{
                type: "Nombre",
                onChange: (event) => handleNombre(event),
              }}/>
            <TextField  label="Email" variant="standard" autoComplete="off"
            inputProps={{
                type: "Email",
                onChange: (event) => handleEmail(event),
              }}/>
            
            
            <TextField  label="Numero de Telefono" variant="standard"
            inputProps={{
                type: "number",
                onChange: (event) => handleTelefono(event),
              }} />

            <TextField label="Titulo" variant="standard"
            inputProps={{
                type: "titulo",
                onChange: (event) => handleTitulo(event),
              }} />
              <TextField  label="Experiencia" variant="standard"
            inputProps={{
                type: "experiencia",
                onChange: (event) => handleExperiecia(event),
              }} />
            
            <TextField label="Contraseña" variant="standard" type='password' autoComplete="off"
            inputProps={{
                type: "password",
                    onChange: (event) => handlePassword(event),
                    autoComplete: "off"
                    }}/>
            
            <Button variant='contained' href = "" size = "small" sx={{width: "20ch"} } onClick={RegistroUser}
            className=''>Registrarme</Button>
            {
                user ? usuarioCorrecto()
                : ""
              }
            </Box>
          <div className='text-center flex flex-col gap-5 pb-12'>
            <h2 className='font-bold' >¿Ya estas registrado?</h2>
            <Link to = "/Login" className='text-blue-600 '>Inicia Sesion</Link>
        </div>
        </div>
        </div>
    </div>) 
}