import { useEffect, useState, useContext, createContext } from "react";
import { urlApi } from "../../services/urlApi";

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
    const url = urlApi
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setListaItens(data.itens_do_cardapio))
        .catch((error) => console.error(error))
    }, [])
    
    return [listaItens]
}


