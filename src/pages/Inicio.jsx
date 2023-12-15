import { useState } from "react";
//import Cartas from "../Card";
import Content from "../components/Content";



export default function Inicio(){
    const [num,setNum] = useState("");
    const inputTexto = (newTitulo) =>{
      return(newTitulo)
    }
    
    return(
            <section className="flex flex-col  pt-32 md:pt-40 h-full w-full lg:gap-60 lg:pt-52">   
              <header className="flex text-center md:pl-20 flex-col mx-6 gap-12 lg:grid lg:grid-cols-2 lg:gap-16">
                <div className=" flex rounded-l-full lg:h-[600px] justify-center max-w-5xl max-h-[600px] items-center ">
                  <img className = " h-[500px] w-[500px] lg:w-11/12 lg:h-full" src="https://res.cloudinary.com/dpblumqqm/image/upload/v1701415299/App/phybd93cbpcxfhn11rki.png"></img>
                </div>
                <div className="flex flex-col gap-10 col-start-1 lg:order-first lg:pt-14 lg:gap-20 ">
                  <h1 className="font-bold text-center text-yellow-50 lg:text-7xl text-5xl ">Encontrá el mejor profesor cerca de tu area</h1>
                  <p className=" text-yellow-50 opacity-80 text-xl md:text-2xl">Amplia y refuerza tus conocimientos con nuestros mejores profesionales, comienza
                  a buscar tu clase deseada</p>
                  <nav className="pt-9 ">
                    <Content callback={setNum} inputTexto = {inputTexto}></Content>
                  </nav>
                </div>
                
              </header> 
              <footer className="grid grid-rows-3 gap-16 items-center md:grid-cols-2 lg:flex lg:flex-cols sm:px-12 2xl:gap-44 justify-center pb-20">
                  {/*<Cartas imagen = {education3} titulo="Buscá" texto="Encontrá tu clase deseada"></Cartas>
                  <Cartas imagen = {education4} titulo="Contactalo" texto="Contactá el profesor que mas se adapte a vos"></Cartas>
                 
                  <Cartas  imagen = {education1}  titulo="Aprendé" texto="Amplia tu conocimiento con los mejores profesores"></Cartas>
    */}
              </footer>
              
              
            </section>
    )
}          

