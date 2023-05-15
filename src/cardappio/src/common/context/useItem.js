//Contexto para controle de estado dos istens cadastrados 

import { useState, useContext, createContext } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [listaItens, setListaItens] = useState([]);
  const [listaFiltrada, setListaFiltrada] = useState([]);
  const [listaCategorias, setListaCategorias] = useState([])

  return (
    <ItemContext.Provider
      value={{ listaItens, setListaItens, listaFiltrada, setListaFiltrada, listaCategorias, setListaCategorias }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItem = () => {
  const context = useContext(ItemContext);
  const { listaItens, setListaItens, listaFiltrada, setListaFiltrada, listaCategorias, setListaCategorias } =
    context;

 

  return {
    listaItens,
    setListaItens,
    listaFiltrada,
    setListaFiltrada,
    listaCategorias, 
    setListaCategorias
  };
};
