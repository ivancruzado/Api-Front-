import React, { useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowDownIcon, Cross2Icon } from '@radix-ui/react-icons';
import { Box, FormControl, InputLabel, MenuItem, TextareaAutosize } from '@mui/material';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { Fragment, useState } from 'react'
import { SelectComponent } from "./SelectComponent"; 
import PubliService from '../controllers/Publicaciones';
import { useParams } from 'react-router-dom';



const Dialogo = ({addNote}) => {

  const[tittle,setTittle] = useState("")
  const[descripcion,setDescripcion] = useState("")

  const[duracion,setDuracion] = useState("")
  const[publi,setPubli] = useState([]);
  const[newPubli,setNewPubli] = useState(null);
  const[categoria,setCategoria] = useState("")
  const[costo,setCosto] = useState("")
  let {UsuarioId} = useParams()
  
  
  
  const [frecuenciaValues, setFrecuenciaValues] = useState([
    { label: 'Unica', value: 'Unica' },
    { label: 'Semanal', value: 'Semanal' },
    { label: 'Mensual', value: 'Mensual' }
  ]);

  const[tipoClase,setTipoClase] = useState([{
    label: 'Individual',value: 'Individual'},
    {label: 'Grupal', value: 'Grupal'}]);

    const [selectedFrecuencia, setSelectedFrecuencia] = useState(frecuenciaValues[0].value);
  const [selectedTipoClase, setSelectedTipoClase] = useState(tipoClase[0].value);

  const cambiarTitulo = (e) =>{
    setTittle (e.target.value)
  }

  const cambiarDesc = (e) =>{
    setDescripcion(e.target.value)
  }

  const cambiarDuracion = (e) =>{
    setDuracion(e.target.value)
  }

  const cambiarCat = (e) =>{
    setCategoria(e.target.value)
  }

  const cambiarCosto = (e) =>{
    setCosto(e.target.value)
  }

  const cambiarTipo = (e) =>{
    setTipoClase(e.target.value)
    
  }

  const cambiarFrecuencia = (e) =>{
    setFrecuenciaValues(e.target.value)
  }


  const addPubli = async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('tuInputDeArchivo');
    const file = fileInput.files[0];
  
    try {
      const loggedUser = window.localStorage.getItem('loggedUser');
      const user = JSON.parse(loggedUser);
  
      if (!user || !user.loginUser || !user.loginUser.token) {
        console.error('User or token undefined');
        return "error";
      }
      
      const token = user.loginUser.token

      const formData = new FormData();
    formData.append('tittle', tittle);
    formData.append('descripcion', descripcion);
    formData.append('Frecuencia', selectedFrecuencia);
    formData.append('categoria', categoria);
    formData.append('tipoClase', selectedTipoClase);
    formData.append('duracion', duracion);
    formData.append('Costo', costo);
    formData.append('image', file);
    formData.append('userId', user.loginUser.user._id);

    const returned = await PubliService.create(formData, token);
      /*
      const object = {
        tittle: tittle,
        descripcion:descripcion,
        Frecuencia: "Unica",
        categoria:categoria,
        tipoClase:"Individual",
        duracion:descripcion,
        Costo:costo,
        image:file,
        userId: user.loginUser.user._id,
      };*/
  
      setPubli((prevPubli) => [...prevPubli, returned]);
      setNewPubli("");
      alert("Creada exitosamente")
      setTittle("")
      setDescripcion("")
      setCategoria("")
      setDuracion("")
      setCosto("")
      
    } catch (error) {
      console.error('Error adding publication:', error);
      alert("No se puede publicar, complete todos los campos");
    }
    
  };
    
  


      return (
        
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="text-white shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-800  px-[10px] lg:px-[15px] font-medium leading-none ">
              Crear nueva
            </button>
          </Dialog.Trigger>
          <Dialog.Portal >
            <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%]  rounded-2xl bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              
                <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                  Crear nueva publicacion
                </Dialog.Title>
                <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                  Añade una nueva clase que quieras compartir con la comunidad
                </Dialog.Description>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="Titulo">
                    Titulo
                  </label>
                  <input
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="Clase"
                    type='text'
                    value={tittle}
                    onChange={cambiarTitulo}
                  />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="w-[90px] text-right text-[15px]" htmlFor="descripcion">
                    Descripcion
                  </label>
                  <textarea
                    className="focus:shadow-violet-700 w-full h-28 flex-1 justify-center rounded-[4px] px-[10px] text-[15px] shadow-[0_0_0_1px] focus:shadow-[0_0_0_2px] resize-none"
                    id="Descripcion"
                    value={descripcion}
                    onChange={cambiarDesc}
                  />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="Categoria">
                    Categoria
                  </label>
                  <input
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="Categoria"
                    type='text'
                    value={categoria}
                    onChange={cambiarCat}
                  />
                </fieldset>

                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="ubicacion">
                    Duracion
                  </label>
                  <input
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="Duracion"
                    value={duracion}
                    onChange={cambiarDuracion}
                  />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="frecuencia">
                    Frecuencia
                  </label>
                  <SelectComponent id="frecuencia" valores={frecuenciaValues} defaultValue={frecuenciaValues[0].value} onValueChange={(value) => setSelectedFrecuencia(value)}/>
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
                    Tipo de Clase
                  </label>
                  <SelectComponent id="tipoClase" valores={tipoClase}  defaultValue={tipoClase[0].value} onValueChange={(value) => setSelectedTipoClase(value)} />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="ubicacion">
                    Costo
                  </label>
                  <input
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="costo"
                    type='number'
                    value={costo}
                    onChange={cambiarCosto}
                  />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
                    Subir foto
                  </label>
                  <input
                    
                    type='file'
                    id="tuInputDeArchivo"
                    //onChange={e =>setFile(e.target.value)}
                    //onChange={subirFile}
                  />
                </fieldset>
                <div className="mt-[25px] flex justify-end">
                  <Dialog.Close asChild>
              
                      <button  onClick={addPubli}
                      className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                      Publicar
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






export default Dialogo;