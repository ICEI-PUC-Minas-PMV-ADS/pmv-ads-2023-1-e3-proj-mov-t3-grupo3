import { useState, useEffect, useContext, createContext } from "react";
import { urlApiTextos } from "../../services/urlApi";
import { faker } from "@faker-js/faker";
import axios from "axios";

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

  useEffect(() => {
    const getTextos = async () => {
      try {
        const response = await axios.get(urlApiTextos);
        setTextoInfos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getTextos();
  }, []);

  const addInfo = async (titulo, descricao) => {
    const novaInfo = {
      id: faker.datatype.uuid(),
      titulo: titulo,
      descricao: descricao,
    };
    try {
      const response = await axios.post(urlApiTextos, novaInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 201) {
        throw new Error("Erro ao adicionar item");
      }

      setTextoInfos([...textosInfo, novaInfo]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateInfo = async (id, titulo, descricao) => {
    const textoAtualizado = {
      id: id,
      titulo: titulo,
      descricao: descricao,
    };

    // console.log(textoAtualizado)
    try {
      const response = await axios.put(`${urlApiTextos}/${id}`, textoAtualizado, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        throw new Error("Erro ao atualizar item");
      }

      const textosAtualizados = textosInfo.map((texto) =>
        texto.id === id ? textoAtualizado : texto
      );

      setTextoInfos(textosAtualizados);
    } catch (error) {
      console.error(error);
    }
  };

  const removeInfo = async (id) => {
    try {
      const response = await axios.delete(`${urlApiTextos}/${id}`);

      if (response.status !== 200) {
        throw new Error("Erro ao remover item");
      }

      const textosAtualizados = textosInfo.filter((texto) => texto.id !== id);

      setTextoInfos(textosAtualizados);
    } catch (error) {
      console.error(error);
    }
  };

  return { textosInfo, addInfo, removeInfo, updateInfo };
};
