import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link} from "react-router-dom"
import login from '../controllers/login';



export default function olvidoContra(){

    const[mail,SetInputMail] = useState("");

    const enviarMail = async (e) => {
        e.preventDefault();
        if (!mail.includes('@')) {
          alert('debe poner un correo electronico valido');
          return;
        }
        try {
    
          const object = {
            email: mail
          };
      
          // Use await here to wait for the promise to resolve
          const returned = await login.emailCambio(object);
          alert('Si el email esta registrado recibira en su bandeja de entrada un mail con las intrucciones para recuperar su contraseña.');
          SetInputMail("")
        } catch (error) {
          console.error('Error adding:', error);
        }
        
      };

    return (
        <div className="items-center flex justify-center pt-36 pb-24 w-full h-screen text-center ">
          <div className=' bg-gray-300 rounded-xl justify-center items-center w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/12  '>
            <h1 className='text-center pt-12  font-extrabold text-xl md:text-3xl'>Olvide mi contraseña</h1>
            <h3 className='text-center text-xl md:text-2xl pt-7'>Introduzca su Mail</h3>
            <div className = "flex flex-col  gap-11 pt-7 justify-center items-center pb-12">
            <Box component="form" sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(e)=>{SetInputMail(e.target.value)}}/>
            </Box>

            <Button variant='contained' href = "" size = "small" sx={{width: "20ch"}} onClick={enviarMail}>Enviar</Button>

        </div>
        </div>
    </div>) 
}