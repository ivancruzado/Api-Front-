import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Link,Navigate, useNavigate } from "react-router-dom"
import {login} from "../controllers/miApp.controller";
import { useEffect, useState } from 'react';
import loginService from '../controllers/login';
import PubliService from '../controllers/Publicaciones';
import{useAuth} from "./ContextoGlobal";



export default function Login(){
    const { authenticated, login } = useAuth();
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
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
    
  

    const handleLogin = async(e) =>{
      e.preventDefault()
      try{
        const user1 = await loginService.login({
          email,
          password
        })
        
        window.localStorage.setItem(
          'loggedUser', JSON.stringify(user1)
        )
        PubliService.setToken(user1.loginUser.token)
        setUser(user1)
        setEmail("")
        setPassword("")
        login();
      }catch(e){
        alert("Contraseña o usuario incorrecto");
      }
      
    }


    const usuarioCorrecto = () =>{
      return(
        <Navigate to={`/PerfilUsuario/${user.loginUser.user._id}`}></Navigate>
      )
    }
     

    return (

        <div className="items-center flex justify-center pt-60 pb-36 w-full h-full ">
         
          <div className=' bg-gray-300 rounded-xl justify-center items-center w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/12 xl:h-3/4 '>
            <h1 className='text-center py-12 text-3xl font-extrabold'>Login</h1>
            <div className = "flex flex-col px-20 gap-11">
            <Box component="form"  sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
            }}
            className='flex justify-center flex-col gap-12 items-center'
            noValidate
            autoComplete="off"
            onSubmit={handleLogin}>
              <TextField  label="Usuario" variant="standard" type='text'
              onChange={({target})=>setEmail(target.value)} />

              <TextField  label="Contraseña" variant="standard" type='password'
              onChange={({target})=>setPassword(target.value)}/>
              <Button type ="submit" variant='contained' href = "" size = "small" sx={{width: "50ch"}}
              className='self-center'>Conectarme</Button>
              {
                user ? usuarioCorrecto()
                : ""
              }
              

            </Box>
        <div className='text-center flex flex-col gap-3'>
            <h2 className='font-bold' >¿No estas registrado aún?</h2>
            <Link to = "/Registro" className='text-blue-600'>Registrarme</Link>
            <Link to = "/ForgotPassword"className='py-5 font-bold'>Olvide mi contraseña</Link>
            
        </div>
        </div>
        </div>

    </div>)}