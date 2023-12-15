import { createContext, useReducer } from "react";
import reducer, { iniSate } from "./Reducer";



const Context = createContext();

const Provider = ({children}) =>{
    const[state,dispatch] = useReducer(reducer,iniSate)

    return(
        <Context.Provider value = {[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}

export {Context} ;
export default Provider;