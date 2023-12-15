import { useEffect, useState } from "react";
import Content from "../components/Content";
import * as RadioGroup from '@radix-ui/react-radio-group';
import { data } from "../data";
import PubliCard from "../components/PubliCard";
import { Link,Navigate, useParams } from "react-router-dom"
import PubliService from '../controllers/Publicaciones';


export function BusquedaClases(){
    const [num,setNum] = useState("");
    const [catSeleccionada,setCatSeleccionada] = useState("");
    const [tipoClase,setTipoClase] = useState("");
    const [Frecuencia,setFrecuencia] = useState("");
    const [calificacion,setCalificacion] = useState();
    const [p,setP] = useState([])

    const data34 = () =>{
        PubliService
        .getAll()
        .then((response)=>{
            setP(response.data)
        })
    }

    useEffect(()=>{
        data34();
    },[])

    let {busqueda} = useParams()

    const cambioCategoria = (e) =>{
        setCatSeleccionada(e.target.value)
    }

    const cambioTipoClase = (e) =>{
        setTipoClase(e.target.value)
    }

    const cambioFrecuencia = (e) =>{
        setFrecuencia(e.target.value)
    }

    const cambioCalificacion = (e) =>{
        setCalificacion(e.target.value)
    }


    return(
        <div className="lg:grid lg:grid-cols-5 flex  flex-col py-32 px-16 2xl:p-36 w-full h-full gap-28">
            <h1 className="text-4xl lg:col-span-3 text-white text-center">Busqueda</h1>
            <div className=" md:col-span-2 justify-center align-middle">
             <Content></Content>
            </div>
            <div className="lg:flex lg:flex-col grid grid-cols-2 w-full  text-xl gap-7  text-white text-center">
                <div className="w-full flex flex-col gap-4">
                    <label className="bg-slate-800 rounded-lg w-36 lg:w-48">Categoria</label>   
                    <form>
                        <RadioGroup.Root
                            className="flex flex-col gap-2.5"
                            aria-label="View density"
                            >
                            <div className="flex items-center">
                                <RadioGroup.Item className="bg-white w-[25px] h-[25px] rounded-full hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                                value="Idiomas"
                                id="r1"
                                onClick={cambioCategoria}
                                checked = {catSeleccionada === "Idiomas" ? true : false}>
                                
                                <RadioGroup.Indicator  className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet-900" />
                                </RadioGroup.Item>
                                <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r1">Idiomas</label>
                            </div>
                            <div className="flex items-center">
                                <RadioGroup.Item className="bg-white w-[25px] h-[25px] rounded-full hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                                value="Ciencias"
                                id="r2" 
                                checked = {catSeleccionada === "Ciencias" ? true : false}
                                onClick={cambioCategoria}>
                                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet-900" />
                                </RadioGroup.Item>
                                <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r2">Ciencias</label>
                            </div>
                            <div className="flex items-center">
                                <RadioGroup.Item className="bg-white w-[25px] h-[25px] rounded-full hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                                value="Matematica"
                                id="r3" 
                                checked = {catSeleccionada == "Matematica" ? true : false}
                                onClick={cambioCategoria}>
                                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet-900" />
                                </RadioGroup.Item>
                                <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r3">Matematica</label>
                            </div>
                            <div className="flex items-center">
                                <RadioGroup.Item className="bg-white  w-[25px] h-[25px] rounded-full hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                                value="programacion"
                                id="r4" 
                                checked = {catSeleccionada == "programacion" ? true : false}
                                onClick={cambioCategoria}>
                                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet-900" />
                                </RadioGroup.Item>
                                <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r4">programacion</label>
                            </div>
                        </RadioGroup.Root>
                    </form>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <label className="bg-slate-800 rounded-lg w-36 lg:w-48">Tipo clase</label>
                    <form>
                        <RadioGroup.Root
                            className="flex flex-col gap-2.5"
                            defaultValue="default"
                            aria-label="View density"
                            >
                            <div className="flex items-center">
                                <RadioGroup.Item className="bg-white w-[25px] h-[25px] rounded-full hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                                value="Individual"
                                id="t1"
                                onClick={cambioTipoClase}
                                checked = {tipoClase === "Individual" ? true : false} >
                                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet-900" />
                                </RadioGroup.Item>
                                <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="t1">Individual</label>
                            </div>
                            <div className="flex items-center">
                                <RadioGroup.Item className="bg-white w-[25px] h-[25px] rounded-full hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                                value="Grupal"
                                id="t2" 
                                onClick={cambioTipoClase}
                                checked = {tipoClase === "Grupal" ? true : false}>
                                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet-900" />
                                </RadioGroup.Item>
                                <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="t2">Grupal</label>
                            </div>
                        </RadioGroup.Root>
                    </form>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <label className="bg-slate-800 rounded-lg w-36 lg:w-48">Frecuencia</label>
                    <form>
                        <RadioGroup.Root
                            className="flex flex-col gap-2.5"
                            defaultValue="default"
                            aria-label="View density"
                            >
                            <div className="flex items-center">
                                <RadioGroup.Item className="bg-white w-[25px] h-[25px] rounded-full hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                                value="Unica"
                                id="f1" 
                                onClick={cambioFrecuencia}
                                checked = {Frecuencia === "Unica" ? true : false}>
                                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet-900" />
                                </RadioGroup.Item>
                                <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="f1">Unica</label>
                            </div>
                            <div className="flex items-center">
                                <RadioGroup.Item className="bg-white w-[25px] h-[25px] rounded-full hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                                value="Semanal"
                                id="f2" 
                                onClick={cambioFrecuencia}
                                checked = {Frecuencia === "Semanal" ? true : false}>
                                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet-900" />
                                </RadioGroup.Item>
                                <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="f2">Semanal</label>
                            </div>
                            <div className="flex items-center">
                                <RadioGroup.Item className="bg-white w-[25px] h-[25px] rounded-full hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                                value="Mensual"
                                id="f3" 
                                onClick={cambioFrecuencia}
                                checked = {Frecuencia === "Mensual" ? true : false}>
                                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet-900" />
                                </RadioGroup.Item>
                                <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="f3">Mensual</label>
                            </div>
                        </RadioGroup.Root>
                    </form>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <label className="bg-slate-800 rounded-lg w-36 lg:w-48">Calificación</label>
                    <form>
                        <RadioGroup.Root
                            className="flex flex-col gap-2.5"
                            defaultValue="default"
                            aria-label="View density"
                            >
                            <div className="flex items-center">
                                <RadioGroup.Item className="bg-white w-[25px] h-[25px] rounded-full hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                                value= {3}
                                id="c1"
                                onClick={cambioCalificacion}
                                checked = {calificacion === "3" ? true : false}>
                                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet-900" />
                                </RadioGroup.Item>
                                <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="c1">3 o Más</label>
                            </div>
                            <div className="flex items-center">
                                <RadioGroup.Item className="bg-white w-[25px] h-[25px] rounded-full hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                                value={4}
                                id="c2" 
                                onClick={cambioCalificacion}
                                checked = {calificacion === "4" ? true : false}>
                                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet-900" />
                                </RadioGroup.Item>
                                <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="c2">4 o Más</label>
                            </div>
                        </RadioGroup.Root>
                    </form>
                </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 lg:col-span-4  gap-24">
                {p.filter((todo)=>{
                    if(todo.Publicado == true){
                    const buscar = busqueda.toLowerCase() === "all"
                    ? true
                    : todo.tittle && todo.tittle.toLowerCase().includes(busqueda);
            
                  const frecuen = Frecuencia === undefined
                    ? true
                    : todo.Frecuencia && todo.Frecuencia.includes(Frecuencia);

                    const tipoC = tipoClase === undefined
                    ? true
                    : todo.tipoClase && todo.tipoClase.includes(tipoClase);

                    const cat = catSeleccionada === undefined
                    ? true
                    : todo.categoria && todo.categoria.includes(catSeleccionada);
            
                  const calif = calificacion === undefined
                    ? true
                    : todo.calificacion !== undefined && todo.calificacion >= calificacion;
                    
                  return buscar && frecuen && calif && tipoC && cat;}
                }).map(todo=>(
                    <PubliCard key = {todo.id} note = {todo}></PubliCard>))}  
            </div>
        </div>)}

      
                