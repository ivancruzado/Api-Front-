import PubliCard from "../components/PubliCard"
import Dialogo from "../components/Dialogo";
import { useEffect, useState } from "react";
import { data } from "../data";
import { Tab } from '@headlessui/react';
import { TriangleDownIcon } from "@radix-ui/react-icons";
import PubliService from '../controllers/Publicaciones';
import { Link,Navigate, useParams } from "react-router-dom"

export function Perfil(){
    const [cards,setCards] = useState(data);
    const[publi,setPubli]=useState('');
    const[newPubli,setNewPubli]=useState('');
    const [p,setP] = useState([])
    let {UsuarioId} = useParams()

    
    const data34 = () =>{
        PubliService
        .getAll()
        .then((response)=>{
            const data = response.data
            setP(response.data)
            
        })
        
    }
 

    useEffect(()=>{
        data34();
    },[p])
    
    


    return(
        <article className="flex flex-col pt-36 gap-20 h-full min-h-screen pb-52" >
   
                <div  className=" max-w-full pt-10   lg:px-16 w-[98vw] h-full">
                    <Tab.Group vertical>
                    <Tab.List className="flex rounded-xl  bg-slate-400   bg-opacity-30 p-1 ">
                        <Tab className={({ selected }) =>
                            (selected
                                ? 'bg-white shadow flex items-center text-center rounded-2xl px-5 '
                                : 'text-blue-100 hover:bg-white/[0.12] rounded-2xl px-5  hover:text-white flex items-center text-center')
                            } >Activas<TriangleDownIcon/></Tab>
                        <Tab className={({ selected }) =>
                            (selected
                                ? 'bg-white shadow flex items-center text-center rounded-2xl px-5'
                                : 'text-blue-100 hover:bg-white/[0.12] rounded-2xl px-5 hover:text-white flex items-center text-center')
                            }>Pausadas <TriangleDownIcon/></Tab>
                        <div className=" flex py-2 sm:col-span-1 justify-end w-full pr-16">
                            <Dialogo  variant="contained"  size="small"/>
                        </div>
                    </Tab.List>
                    <Tab.Panels className="mt-4 ">
                        <Tab.Panel className="rounded-xl bg-gray-300 bg-opacity-10 p-3 h-full">
                            <h1 className="col-span-1 text-4xl pl-7 py-4 pb-12 text-white font-semibold">Mis publicaciones activas</h1>
                            <div className="grid lg:grid-cols-3 lg:col-span-4 gap-12 sm:grid-cols-2 px-4 pb-9">
                            {p.filter((note)=>{
                                if(note.Publicado == true && note.user._id === UsuarioId ){
                                    return note;
                                }
                                
                            }).map((note,index)=>(
                                <PubliCard key = {index} note = {note}  component={true} ></PubliCard>))}
                                
                            {/*cards.filter((todo)=>{
                                if(todo.estado == "Activo"){
                                    return todo;
                                }
                            }).map((todo,index)=>(
                            <PubliCard key = {index} todo = {todo} onPause={pauseCard} onDelete={deleteCard} component={true}></PubliCard>))*/}  
                            </div></Tab.Panel>
                        <Tab.Panel className="rounded-xl bg-gray-300 bg-opacity-10 p-3 h-full">
                            <h1 className="col-span-1 text-4xl pl-7 py-4 pb-12 text-white font-semibold">Pausadas</h1>
                            <div className="grid lg:grid-cols-3 lg:col-span-4 gap-12 sm:grid-cols-2 px-4 pb-9">
                            {p.filter((note)=>{
                                if(note.Publicado == false && note.user._id === UsuarioId){
                                    return note;
                                }
                            }).map((note,index)=>(
                                <PubliCard key = {index} note = {note}  component={true} ></PubliCard>))}
                        </div></Tab.Panel>
                        
                    </Tab.Panels>
                  </Tab.Group>
                </div>

          
        </article>
    )
}