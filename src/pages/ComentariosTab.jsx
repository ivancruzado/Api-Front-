import { Tab } from "@headlessui/react";
import { Avatar, Box, IconButton, Paper, Rating } from "@mui/material"
import { CheckIcon, TriangleDownIcon } from "@radix-ui/react-icons";
import PubliService from '../controllers/Publicaciones';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comentario from '../controllers/Comentario';
import GetComentario from "../components/Comentario";
import { Clear, CloseOutlined, Done, RemoveCircleOutline } from "@mui/icons-material";
import { Close } from "@radix-ui/react-dialog";
import ComentarioComponent from "../components/ComentarioComponent";

export default function Opiniones(){
    let {UsuarioId} = useParams();
    let[publiSelected,setPubli] = useState([]);
    let[estado,setEstado] = useState()
    let[idUser,setIdUser] = useState()
    let[coment,setComent] = useState([])
    //let publiSelected = p.find(publi => publi._id == PubliId)


  const dataComentario = () =>{
      Comentario
        .getAll()
        .then((response)=>{
            const data = response.data
            setIdUser(data.publicacion)
            setComent(response.data)
        })
    }

    useEffect(()=>{
        dataComentario();
    },[coment])

    
      const updateComentario = async (e) => {
        try {
          const loggedUser = window.localStorage.getItem('loggedUser');
          const user = JSON.parse(loggedUser);
      
          if (!user || !user.loginUser || !user.loginUser.token) {
            console.error('User or token undefined');
            return "error";
          }
          const token = user.loginUser.token
          let Publicado = false
          
          const ID = coment._id //armar otro componente de aceptar y rechazaar para que funcione sino no tengo _id
          
          const returned = await Comentario.update(ID,token,Publicado);
      
        } catch (error) {
          console.error('Error deleting publication:', error);
        }
      };

    return(
        <article className="flex flex-col pt-36 m-0 " >

                <div  className=" max-w-full pt-10  lg:px-16 w-[98vw] h-full">
                    <Tab.Group vertical>
                    <Tab.List className="flex rounded-xl  bg-slate-400   bg-opacity-30 p-4 ">
                        <Tab className={({ selected }) =>
                            (selected
                                ? 'bg-white shadow flex items-center text-center rounded-2xl px-5 '
                                : 'text-blue-100 hover:bg-white/[0.12] rounded-2xl px-5  hover:text-white flex items-center text-center')
                            } >Pendientes<TriangleDownIcon/></Tab>
                        <Tab className={({ selected }) =>
                            (selected
                                ? 'bg-white shadow flex items-center text-center rounded-2xl px-5'
                                : 'text-blue-100 hover:bg-white/[0.12] rounded-2xl px-5 hover:text-white flex items-center text-center')
                            }>Activas <TriangleDownIcon/></Tab>
                            <Tab className={({ selected }) =>
                            (selected
                                ? 'bg-white shadow flex items-center text-center rounded-2xl px-5 text-xs md:text-base'
                                : 'text-blue-100 hover:bg-white/[0.12] rounded-2xl px-5 hover:text-white flex items-center text-center')
                            }>Rechazadas <TriangleDownIcon/></Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-4 w-full">
                        <Tab.Panel className="rounded-xl bg-gray-300 bg-opacity-10 p-3 ">
                            <h1 className="col-span-1 text-4xl pl-7 py-4 pb-12 text-white font-semibold">Opiniones pendientes</h1>
                            <div className="grid lg:grid-cols-3 lg:col-span-4 gap-12 sm:grid-cols-2 px-4 pb-9">

                {coment.filter((com)=>{
                    if(com.estado === "Pendiente" &&
                    com.publicacion &&
                    com.publicacion.user === UsuarioId){
                      
                      return com;
                  }
                  }).map((com,index)=>(
                   <ComentarioComponent com = {com} key = {index}/>))}   
                                
                            </div></Tab.Panel>
                        <Tab.Panel className="rounded-xl bg-gray-300 bg-opacity-10 p-3">
                            <h1 className="col-span-1 text-4xl pl-7 py-4 pb-12 text-white font-semibold">Opiniones aceptadas</h1>
                            <div className="grid lg:grid-cols-3 lg:col-span-4 gap-12 sm:grid-cols-2 px-4 pb-9">
                            {coment.filter((com)=>{
                            if(com.estado == "Aceptado" &&
                            com.publicacion &&
                            com.publicacion.user === UsuarioId){
                              
                                  return com;
                }
                  }).map((com,index)=>(
                    <ComentarioComponent com = {com} key = {index}/>))}
                        </div></Tab.Panel>
                        <Tab.Panel className="rounded-xl bg-gray-300 bg-opacity-10 p-3">
                            <h1 className="col-span-1 text-4xl pl-7 py-4 pb-12 text-white font-semibold">Opiniones rechazadas</h1>
                            <div className="grid lg:grid-cols-3 lg:col-span-4 gap-12 sm:grid-cols-2 px-4 pb-9">
                            {coment.filter((com)=>{
                    if(com.estado == "Rechazado" &&
                    com.publicacion &&
                    com.publicacion.user === UsuarioId ){
                      return com;
                    
                }
                  }).map((com,index)=>(
                    <ComentarioComponent com = {com} key = {index}/>))}
                        </div></Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>

            <div className="flex justify-center self-center h-screen" >
            </div>
        </article>
    )
}