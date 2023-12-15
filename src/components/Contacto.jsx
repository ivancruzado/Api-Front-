import { Avatar, Box, Paper, Rating } from "@mui/material";
import { MoonIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";



export default function GetContacto({contacto}){
  
    return(
            <Paper square={false} elevation={12} className="p-3 w-full justify-center">
                <div className="flex gap-x-5 col-span-2 ">
                    <Avatar/>
                    <h1 className="text-2xl font-bold col-span-2 ">{contacto.mail}</h1>      
                </div>
                <h2 className="col-span-2 mx-3 my-2 font-semibold text-slate-900">{contacto.publicacion.tittle}</h2>
                <p className="col-span-2 mx-3 my-2 font-semibold">{contacto.mensaje}</p>
                
            </Paper>
    )
}
