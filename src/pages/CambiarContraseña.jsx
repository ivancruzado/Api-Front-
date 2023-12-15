import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link, useNavigate, useParams} from "react-router-dom"
import login from '../controllers/login';


export default function CambioContraseña(){

    const[contraseña,setContraseña] = useState("");
    const {token} = useParams();
    const navigate = useNavigate();

    const cambiarContra = async (e) => {
        e.preventDefault();
        try {
          const object = {
            token:token,
            password:contraseña
          };

          const returned = await login.cambioContraseña(object);
          alert('Contraseña actualizada correctamente');
          navigate('/');
        } catch (error) {
          console.error('Error changing:', error);
        }
      };

    return (
        <div className="items-center flex justify-center pt-32  pb-24 w-full h-screen text-center ">
          <div className=' bg-gray-300 rounded-xl justify-center items-center w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/12  '>
            <h1 className='text-center pt-12  font-extrabold text-xl md:text-3xl'>Cambio de contraseña</h1>
            <h3 className='text-center text-xl md:text-2xl pt-7'>Introduzca su nueva contraseña</h3>
            <div className = "flex flex-col  gap-11 pt-7 justify-center items-center pb-12">
            <Box component="form" sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="standard-basic" label="Contraseña" variant="standard" type='password' onChange={(e)=>{
                setContraseña(e.target.value)
            }}/>
            </Box>
            <Button variant='contained' href = "" size = "small" sx={{width: "20ch"}} onClick={cambiarContra}>Actualizar</Button>

        </div>
        </div>
    </div>) 
}

