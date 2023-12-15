import { Avatar, Box, Paper, Rating } from "@mui/material";
import { MoonIcon } from "@radix-ui/react-icons";



export default function GetComentarioPerfil({coment}){
  console.log()
    return(
        
            <Paper square={false} elevation={12} className="p-3 w-full justify-center">
                <div className="flex gap-x-5 col-span-2">
                    <Avatar/>
                    <h1 className="text-2xl font-bold col-span-2 ">{coment.com.name}</h1>
                </div>
                <h1 className="col-span-2 mx-3 my-2 font-semibold text-slate-900">{coment.com.publicacion.tittle}</h1>
                
                <Rating className="flex p mx-3 mt-3" value={coment.com.calificacion}></Rating>
                
                <p className="col-span-2 mx-3 my-2 font-semibold">{coment.com.texto}</p>
            </Paper>
         
    )
}
