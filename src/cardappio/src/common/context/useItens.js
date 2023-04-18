import { useEffect, useState, useContext, createContext } from "react";
import { urlApiItens } from "../../services/urlApi";
import axios from 'axios';

export const ItemContext = createContext();

export const ItemProvider = ({children}) => {
    const [listaItens, setListaItens] = useState([]);
    return(
        <ItemContext.Provider value={{listaItens, setListaItens}}>
            {children}
        </ItemContext.Provider>
    )
}

export const useItens = () => {
    const {listaItens, setListaItens} = useContext(ItemContext)
    const url = urlApiItens
    useEffect(() => {
        axios.get(url)
        .then((response) => setListaItens(response.data))
        .catch((error) => console.error(error))
            }, [])
    
    return {listaItens}
}


