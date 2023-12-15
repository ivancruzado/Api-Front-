import { useState } from "react";
import Comentario from "../controllers/Comentario";
import GetComentario from "./Comentario";
import { IconButton } from "@mui/material";
import { CloseOutlined, Done } from "@mui/icons-material";
import GetComentarioPerfil from "./ComPerfil";



export default function ComentarioComponent({com}){


let[estado,setEstado] = useState()
    let[idUser,setIdUser] = useState()
    let[contact,setContact] = useState([])
  

      const updateContactoActivar = async (e) => {

        try {
          const loggedUser = window.localStorage.getItem('loggedUser');
          const user = JSON.parse(loggedUser);
      
          if (!user || !user.loginUser || !user.loginUser.token) {
            console.error('User or token undefined');
            return "error";
          }
         
          const token = user.loginUser.token
          let Publicado = "Aceptado"
          setEstado(Publicado)
          const ID = com._id

          const returned = await Comentario.update(ID,token,Publicado);
          
      
        } catch (error) {
          console.error('Error deleting publication:', error);
        }
      };

      const updateContactoFinalizado = async (e) => {

        try {
          const loggedUser = window.localStorage.getItem('loggedUser');
          const user = JSON.parse(loggedUser);
      
          if (!user || !user.loginUser || !user.loginUser.token) {
            console.error('User or token undefined');
            return "error";
          }
         
          const token = user.loginUser.token
          let Publicado = "Finalizado"
          const ID = com._id

          const returned = await Comentario.update(ID,token,Publicado);
          
      
        } catch (error) {
          console.error('Error deleting publication:', error);
        }
      };
      const updateContactoCancelar = async (e) => {

        try {
          const loggedUser = window.localStorage.getItem('loggedUser');
          const user = JSON.parse(loggedUser);
      
          if (!user || !user.loginUser || !user.loginUser.token) {
            console.error('User or token undefined');
            return "error";
          }
         
          const token = user.loginUser.token
          let Publicado = "Rechazado"
          const ID = com._id

          const returned = await Comentario.update(ID,token,Publicado);
          await Contacto
          console.log(returned)
      
        } catch (error) {
          console.error('Error deleting publication:', error);
        }
      };

      return(
        
        <div className="flex flex-col lg:flex-row justify-center gap-5 ">
          
          <div className=" flex items-center  justify-center text-center w-fit h-fit rounded-3xl bg-white bg opacity-90">
            <IconButton onClick={updateContactoActivar} color="success">
                <Done ></Done>
            </IconButton>
            <IconButton  onClick={updateContactoCancelar} color="error">
                <CloseOutlined></CloseOutlined > 
            </IconButton>
            
          </div>
          <GetComentarioPerfil coment={{com}}/>
       </div>
      )
    }