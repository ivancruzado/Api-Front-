import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowDownIcon, Cross2Icon } from '@radix-ui/react-icons';
import { Box, FormControl, InputLabel, MenuItem, Rating, TextareaAutosize } from '@mui/material';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { Fragment, useState } from 'react'

import Comentario from "../controllers/Comentario";
import { useParams } from 'react-router-dom';




const ComentarioNuevo = () => {
  const[nombre,setNombre] = useState("")
  const[mail,setMail] = useState("")
  const[texto,setTexto] = useState("")
  const[calificacion,setCalificacion]= useState(1);
  const[comentario,setComentario] = useState([]);
  const[newComentario,setnewComentario] = useState(null);
  let {PubliId} = useParams();

  const cambiarNombre = (e) =>{
    setNombre (e.target.value)
  }

  const cambiarMail = (e) =>{
    setMail(e.target.value)
  }

  const cambiarTexto = (e) =>{
    setTexto(e.target.value)
  }
  const cambiarCalificacion = (e) =>{
    setCalificacion(e.target.value)
    
  }





  const addComentario = async (e) => {
    e.preventDefault();
    if (!mail.includes('@')) {
      // Mostrar un mensaje de error o realizar alguna acción adicional
      alert('debe poner un correo electronico valido');
      return;
    }
    try {

      const object = {
        name:nombre,
        texto:texto,
        calificacion: calificacion,
        mail:mail,
        publiId: PubliId,
      };
  
      // Use await here to wait for the promise to resolve
      const returned = await Comentario.create(object);
  
      setComentario((prev) => [...prev, returned]);
      setnewComentario("");
      alert('Comentario enviado correctamente');
    } catch (error) {
      console.error('Error adding:', error);
    }
    setTexto("")
    setNombre("")
    setMail("")
    setCalificacion(1)
  };

      return (
        
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="text-white shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-800  px-[10px] lg:px-[15px] font-medium leading-none ">
              Publicar Opinion
            </button>
          </Dialog.Trigger>
          <Dialog.Portal >
            <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%]  rounded-2xl bg-indigo-300 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              
                <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                  Enviar nuevo comentario al profesor
                </Dialog.Title>
                <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                  Contactate con el profesor elegido mediante este medio
                </Dialog.Description>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="Titulo">
                    Nombre
                  </label>
                  <input
                    className="text-violet11 shadow-violet7  focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="nombre"
                    type='text'
                    value={nombre}
                    onChange={cambiarNombre}
                  />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="w-[90px] text-right text-[15px]" htmlFor="descripcion">
                    Opinion
                  </label>
                  <textarea
                    className="focus:shadow-violet-700 w-full h-28 flex-1 justify-center rounded-[4px] px-[10px] text-[15px] shadow-[0_0_0_1px] focus:shadow-[0_0_0_2px] resize-none"
                    id="mensaje"
                    value={texto}
                    onChange={cambiarTexto}
                  />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="Categoria">
                    Mail
                  </label>
                  <input
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="mail"
                    type='text'
                    value={mail}
                    onChange={cambiarMail}

                  />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="Categoria">
                    Calificacion
                  </label>
                  <Rating
                    name="simple-controlled"
                    defaultValue={4} precision={0.5}
                    className=""
                    id="Calificacion"
                    value={calificacion}
                    onChange={cambiarCalificacion}

                  />
                </fieldset>

                <div className="mt-[25px] flex justify-end">
                  <Dialog.Close asChild>
              
                      <button
                      type='submit'
                      onClick={addComentario}  
                      className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                      Enviar
                      </button>
              
                  </Dialog.Close>
                  <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
              <Cross2Icon />
              </button>
              </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      );
    };


export default ComentarioNuevo;