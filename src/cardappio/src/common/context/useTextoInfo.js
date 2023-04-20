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

  useEffect(() => {
      try {
        API.get(`${BASE_URL}/textos_sobre`)
        .then((response) => setTextoInfos(response.data))
      } catch (error) {
        console.error(error);
      }
  }, [isFocused]);

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
