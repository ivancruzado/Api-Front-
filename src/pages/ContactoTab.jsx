import { Tab } from "@headlessui/react";
import { Avatar, Box, IconButton, Paper, Rating } from "@mui/material"
import { CheckIcon, TriangleDownIcon } from "@radix-ui/react-icons";
import PubliService from '../controllers/Publicaciones';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comentario from '../controllers/Comentario';
import GetComentario from '../components/Comentario'
import { Clear, CloseOutlined, Done, RemoveCircleOutline } from "@mui/icons-material";
import { Close } from "@radix-ui/react-dialog";
import Contacto from "../controllers/Contacto";
import GetContacto from "../components/Contacto";
import ComponentFInal from "./ContactoComponent";

export default function Contactos(){
    let {UsuarioId} = useParams();
    let[publiSelected,setPubli] = useState([]);
    let[estado,setEstado] = useState()
    let[idUser,setIdUser] = useState()
    let[contact,setContact] = useState([])
    //let publiSelected = p.find(publi => publi._id == PubliId)

  const dataContacto = () =>{
      Contacto
        .getAll()
        .then((response)=>{
            const data = response.data
            setContact(data)
        })
        
    }

    useEffect(()=>{
      dataContacto();
    },[contact])

    

    return(
        <article className="flex flex-col pt-36 m-0" >

                <div  className=" h-screen max-w-full pt-10  lg:px-16 w-[98vw]">
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
                            }>En curso <TriangleDownIcon/></Tab>
                            <Tab className={({ selected }) =>
                            (selected
                                ? 'bg-white shadow flex items-center text-center rounded-2xl px-5'
                                : 'text-blue-100 hover:bg-white/[0.12] rounded-2xl px-5 hover:text-white flex items-center text-center')
                            }>Finalizadas <TriangleDownIcon/></Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-4 w-full">
                        <Tab.Panel className="rounded-xl bg-gray-300 bg-opacity-10 p-3 ">
                            <h1 className="col-span-1 text-4xl pl-7 py-4 pb-12 text-white font-semibold">Contactos Pendientes</h1>
                            <div className="grid lg:grid-cols-3 lg:col-span-4 gap-12 sm:grid-cols-2 px-4 pb-9">

                {contact.filter((com)=>{
                    if(com.estado == "Pendiente" && com.publicacion.user == UsuarioId ){
                      return com;
                  }
                  }).map((com,index)=>(
                    <ComponentFInal com = {com}/>))}   
                                
                            </div></Tab.Panel>
                        <Tab.Panel className="rounded-xl bg-gray-300 bg-opacity-10 p-3">
                            <h1 className="col-span-1 text-4xl pl-7 py-4 pb-12 text-white font-semibold">Contactos en curso</h1>
                            <div className="grid lg:grid-cols-3 lg:col-span-4 gap-12 sm:grid-cols-2 px-4 pb-9">
                            {contact.filter((com)=>{
                    if(com.estado == "En curso" && com.publicacion.user == UsuarioId  ){
                      return com;
                    
                }
                  }).map((com,index)=>(
                    <ComponentFInal com = {com} key = {index}/>))}
                        </div></Tab.Panel>
                        <Tab.Panel className="rounded-xl bg-gray-300 bg-opacity-10 p-3">
                            <h1 className="col-span-1 text-4xl pl-7 py-4 pb-12 text-white font-semibold">Contactos finalizados</h1>
                            <div className="grid lg:grid-cols-3 lg:col-span-4 gap-12 sm:grid-cols-2 px-4 pb-9">
                            {contact.filter((com)=>{
                    if(com.estado == "Cancelado" && com.publicacion.user == UsuarioId  ){
                      return com;
                    
                }
                  }).map((com,index)=>(
                    <ComponentFInal com = {com} key = {index}/>))}
                        </div></Tab.Panel>
                        
                    </Tab.Panels>
                  </Tab.Group>
                </div>

            <div className="flex justify-center self-center h-screen" >
            </div>
        </article>
    )
}