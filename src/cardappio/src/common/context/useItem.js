import { useState, useContext, createContext, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { filtrarPesquisa } from "../../services/item-service"

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [listaItens, setListaItens] = useState([]);
  const [listaFiltrada, setListaFiltrada] = useState([]);

  return (
    <ItemContext.Provider
      value={{ listaItens, setListaItens, listaFiltrada, setListaFiltrada }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItem = () => {
  const context = useContext(ItemContext);
  const { listaItens, setListaItens, listaFiltrada, setListaFiltrada } =
    context;
  const isFocused = useIsFocused();

  //Faz uma requisição na API e pega todos os itens cadastrados e insere na variavel listaItens através do setListaItens
  useEffect(() => {
    const listaItensRef = collection(db, "itens_do_cardapio");
    getDocs(listaItensRef)
      .then((querySnapshot) => {
        const listaItensGet = [];
        querySnapshot.forEach((doc) => {
          listaItensGet.push({ id: doc.id, ...doc.data() });
        });
        setListaItens(listaItensGet);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [isFocused]);

  //Quando a lista de itens pricipal (carregada pela API) for modificada, a "segunda lista" recebera o valor dessa lista, dessa forma, quando o app for aberto pela primera vez a lista sera carregada e quando sofrer modificações também. Essa segunda lista foi criada para que possa ser feito pesquisas/filtros e não altere nada da principal.

  useEffect(() => {
    setListaFiltrada(listaItens);
  }, [listaItens]);

  useEffect(() => {
    filtrarPesquisa("");
  }, [filtrarPesquisa]);

  const filtrarPesquisa = (valorCampo) => {
    const novaLista = listaItens.filter((item) =>
      item.descricao.toLowerCase().includes(valorCampo.toLowerCase())
    );
    setListaFiltrada(novaLista);
  };

  return {
    listaItens,
    setListaItens,
    listaFiltrada,
    setListaFiltrada,
    filtrarPesquisa
  };
};
