//Arquivo de serviços dos textos de informações sobre o estabelecimento

import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  doc, updateDoc, deleteDoc, getDocs
} from "firebase/firestore";

//Função para listar todos os textos cadastradas
export const carregaTextosInfo = async (setTextoInfos) => {
  const textoInfosRef = collection(db, "textos_sobre");

  try {
    const querySnapshot = await getDocs(textoInfosRef);
    const textoInfos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTextoInfos(textoInfos)
  } catch (error) {
    console.log("Error getting documents: ", error);
  }
}

export const addInfo = async ({titulo, descricao}, textosInfo, setTextoInfos) => {
  const novaInfo = {
    titulo: titulo,
    descricao: descricao,
  };


  try {
    const docRef = await addDoc(collection(db, "textos_sobre"), {
      titulo: novaInfo.titulo,
      descricao: novaInfo.descricao,
    });
    const novaInfoComId = {
      ...novaInfo,
      id: docRef.id
    }

    setTextoInfos([...textosInfo, novaInfoComId]);
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 401) {
      alert("Você não está autorizado a realizar esta operação.");
    }
  }
};

//Recebe parametros e atribui a um objeto,assim fazendo uma requisição na API e insere o novo dado no banco e no textosInfo, substituindo o anterior
export const updateInfo = async ({id, titulo, descricao}, textosInfo, setTextoInfos)  => {
  const textoAtualizado = {
    titulo: titulo,
    descricao: descricao,
  };
  try {
    const docRef = doc(db, "textos_sobre", id);
    await updateDoc(docRef, textoAtualizado);
    const textosAtualizados = textosInfo.map((texto) =>
      texto.id === id ? { ...texto, ...textoAtualizado } : texto
    );
    setTextoInfos(textosAtualizados);
  } catch (error) {
    console.error(error);
  }
};

//Recebe parametros a id de um objeto, assim fazendo uma requisição na API e remove o objeto do banco e atribui ao textosInfo, o valor anterior com um filtro excluindo o objeto que possui aquele id
export const deleteInfo = async ({id}, textosInfo, setTextoInfos) => {

  try {
    await deleteDoc(doc(db, "textos_sobre", id));
    const textosAtualizados = textosInfo.filter((texto) => texto.id !== id);
    setTextoInfos(textosAtualizados);
  } catch (error) {
    console.error(error);
  }
};
