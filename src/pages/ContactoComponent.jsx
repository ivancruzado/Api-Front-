import { IconButton } from "@mui/material"
import GetContacto from "../components/Contacto"
import { CloseOutlined, Done } from "@mui/icons-material"
import Contacto from "../controllers/Contacto";
import { useEffect, useState } from "react";


export default function ComponentFInal({com}){

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
          let Publicado = "En curso"
          setEstado(Publicado)
          const ID = com._id

          const returned = await Contacto.update(ID,token,Publicado);
          await Contacto
      
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

          const returned = await Contacto.update(ID,token,Publicado);
          await Contacto
      
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
          let Publicado = "Cancelado"
          const ID = com._id

          const returned = await Contacto.update(ID,token,Publicado);
          await Contacto
      
        } catch (error) {
          console.error('Error deleting publication:', error);
        }
      };

    return(
        <div className="flex flex-col xl:flex-row justify-center gap-5">
          
          <div className=" flex items-center  justify-center text-center w-fit h-fit rounded-3xl bg-white bg opacity-90">
            <IconButton onClick={updateContactoActivar} color="success">
                <Done ></Done>
            </IconButton>
            <IconButton  onClick={updateContactoCancelar} color="error">
                <CloseOutlined></CloseOutlined > 
            </IconButton>
          </div>
          <GetContacto contacto={com}/>
      </div>
    )
}