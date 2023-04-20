import { useState, useEffect, useContext, createContext } from "react";
import { BASE_URL } from "../../services/urlApi";
import { faker } from "@faker-js/faker";
import API from "../../services/webapi.services";
import { useIsFocused } from '@react-navigation/native';
import { Alert } from "react-native";

export const TextoInfoContext = createContext();

export const TextoInfoProvider = ({ children }) => {
  const [textosInfo, setTextoInfos] = useState([]);
  return (
    <TextoInfoContext.Provider value={{ textosInfo, setTextoInfos }}>
      {children}
    </TextoInfoContext.Provider>
  );
};

export const useTextoInfo = () => {
  const { textosInfo, setTextoInfos } = useContext(TextoInfoContext);
  const isFocused = useIsFocused();
  
  //Faz uma requisição na API e pega todos as informações cadastrados e insere na variavel textosInfo através do setTextoInfos
  useEffect(() => {
      try {
        API.get(`${BASE_URL}/textos_sobre`)
        .then((response) => setTextoInfos(response.data))
      } catch (error) {
        console.error(error);
      }
  }, [isFocused]);

  //Recebe parametros e atribui a um objeto,assim fazendo uma requisição na API e insere o novo dado no banco e no textosInfo
  const addInfo = async (titulo, descricao) => {
    const novaInfo = {
      id: faker.datatype.uuid(),
      titulo: titulo,
      descricao: descricao,
    };

    try {
      await API.post(`${BASE_URL}/664/textos_sobre`, novaInfo)
      setTextoInfos([...textosInfo, novaInfo]);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        alert("Você não está autorizado a realizar esta operação.")
      }
    }
  };

  //Recebe parametros e atribui a um objeto,assim fazendo uma requisição na API e insere o novo dado no banco e no textosInfo, substituindo o anterior
  const updateInfo = async (id, titulo, descricao) => {
    const textoAtualizado = {
      id: id,
      titulo: titulo,
      descricao: descricao,
    };
    try {
      await API.put(`${BASE_URL}/664/textos_sobre/${id}`, textoAtualizado)
      const textosAtualizados = textosInfo.map((texto) =>
        texto.id === id ? textoAtualizado : texto
      );
      setTextoInfos(textosAtualizados);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        alert("Você não está autorizado a realizar esta operação.")
      }
    }
  };

  //Recebe parametros a id de um objeto, assim fazendo uma requisição na API e remove o objeto do banco e atribui ao textosInfo, o valor anterior com um filtro excluindo o objeto que possui aquele id
  const removeInfo = async (id) => {
    try {
      await API.delete(`${BASE_URL}/664/textos_sobre/${id}`)
      const textosAtualizados = textosInfo.filter((texto) => texto.id !== id);
      setTextoInfos(textosAtualizados);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Você não está autorizado a realizar esta operação.")
      }
      console.error(error);
    }
  };

  return { textosInfo, addInfo, removeInfo, updateInfo };
};
