import { useEffect, useState, useContext, createContext } from "react";
import { BASE_URL } from "../../services/urlApi";
import API from "../../services/webapi.services";
import { useIsFocused } from '@react-navigation/native';

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
    const isFocused = useIsFocused();

    useEffect(() => {
        try {
          API.get(`${BASE_URL}/itens_do_cardapio`)
          .then((response) => setListaItens(response.data))
        } catch (error) {
          console.error(error);
        }
    }, [isFocused]);
      
    return {listaItens}
}


