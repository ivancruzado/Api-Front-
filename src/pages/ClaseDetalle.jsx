import { Avatar, Button, Chip, Paper, Rating, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { data } from "../data";
import { Link,Navigate, useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import PubliService from '../controllers/Publicaciones';
import ContactoCliente from '../components/ContactoCliente';
import ComentarioNuevo from '../components/ComentarioNuevo';

import Comentario from '../controllers/Comentario';
import GetComentario from '../components/Comentario'




export default function ClaseDetalle(){
    let {PubliId} = useParams();
    let[publiSelected,setPubli] = useState([]);
    let[nombre,setNombre] = useState("")
    let[image,setImage] = useState("")
    let[experiencia,setExperiencia] = useState("")
    let[titulo,setTitulo] = useState("")
    let[idUser,setIdUser] = useState()
    let[rating,setRating] = useState()
    let[calificacion,setCalificacion] = useState()
    let[coment,setComent] = useState([])
    //let publiSelected = p.find(publi => publi._id == PubliId)
    const data34 = () =>{
      PubliService
      .getPubliDetails(PubliId)
      .then((response)=>{
        setPubli(response.data)
        setNombre(response.data.user.name)
        setImage(response.data.image.secure_url)
        setIdUser(response.data.user._id)
        setExperiencia(response.data.user.Experiencia)
        setTitulo(response.data.user.Titulo)
        
      }).catch((error) => {
        console.error('Error fetching publication details:', error);
      });
  }

  const dataComentario = () =>{
      Comentario
        .getAll()
        .then((response)=>{
            const data = response.data
            setComent(response.data)
            
        }) 
    }

    useEffect(()=>{
        data34();
        dataComentario();
        
    },[])

    return (
        <div className=" lg:p-32 py-32 px-4 md:px-10 mt-20 h-full w-screen grid grid-cols-4 gap-x-28 gap-16">
          <section className=' bg-gray-300 md:px-14 rounded-xl items-center grid grid-cols-2 md:grid-cols-4 justify-center lg:flex lg:flex-col lg:p-14 gap-7 font-extrabold lg:h-[700px] col-span-4 lg:col-span-1'>
            <Avatar  src = {image} sx={{ width: 120, height: 120}}/>
            <h1 className='text-3xl'>{nombre}</h1>
            <Rating  name="half-rating-read" value={calificacion} precision={0.5} readOnly />
            <h2 className='text-xl text-center'>{titulo}</h2>
            <h2 >{experiencia}</h2>
            <ContactoCliente />
            <ComentarioNuevo/>
            <Chip label={`$${publiSelected.Costo}`} color="info" variant="filled" sx={{ width: 150, height: 45, fontSize: 25}} />
          </section>
          <section className='col-span-4 lg:col-span-3 px-6'>
            <Stack direction="row" spacing={4}>
                <Chip label={publiSelected.duracion} color="primary" variant="elevated"  sx={{ width: 89, height: 32}}/>
                <Chip label={publiSelected.categoria} color="primary" variant="filled" sx={{ width: 120, height: 32}} />
                <Chip label={publiSelected.tipoClase} color="primary" variant="filled" sx={{ width: 89, height: 32}} />
            </Stack>
            <h1 className='text-start text-white py-12 text-5xl font-extrabold'>{publiSelected.tittle}</h1>
            
            <div className='lg:mr-56'>
              <p className='text-white text-2xl'>{publiSelected.descripcion}</p>
            </div>
          </section>
          <section className="col-span-4 mt-28 ">
            <h1 className='text-center text-3xl lg:text-5xl font-semibold pb-24 text-white '>Comentarios</h1>
            <div className="grid lg:grid-cols-3 lg:col-span-4 gap-12 sm:grid-cols-2 px-4 pb-9">
                  {coment.filter((com)=>{
                    if(com.estado == "Aceptado" &&
                    com.publicacion &&
                    com.publicacion._id === PubliId ){
                      return com;
                    
                }
                  })
                  .map((com,index)=>(
                        <GetComentario coment={com}/>))}  </div>
            
          </section>
        </div>) 
}