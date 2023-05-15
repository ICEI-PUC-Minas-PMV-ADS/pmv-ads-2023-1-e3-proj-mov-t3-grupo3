//Arquivo de serviços dos itens do cardapio

import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db, storage } from "../config/firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

//Função para listar todas as categorias cadastradas
export const carregaListaCategorias = async (setCategorias) => {
  const categoriasRef = collection(db, "categorias");

  try {
    const querySnapshot = await getDocs(categoriasRef);
    const listaCategorias = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCategorias(listaCategorias);
    console.log("entrou");
  } catch (error) {
    console.log("Error getting documents: ", error);
  }
};

export const addCategoria = async (
  { nome },
  setListaCategoria,
  listaCategorias
) => {
  try {
    const novaCategoria = {
      nome: nome,
    };

    const docRef = await addDoc(collection(db, "categorias"), novaCategoria);
    const novoCategoriaId = docRef.id;
    const novoCategoriaComId = {
      ...novaCategoria,
      id: novoCategoriaId,
    };

    const novaListaCategorias = [...listaCategorias, novoCategoriaComId];
    setListaCategoria(novaListaCategorias);
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 401) {
      alert("Você não está autorizado a realizar esta operação.");
    }
    return listaCategorias;
  }
};

export const updateCategoria = async (
  { id, nome },
  listaCategorias,
  setListaCategorias
) => {
  const categoriaAtualizada = {
    nome: nome,
  };
  try {
    console.log(categoriaAtualizada.nome);
    const docRef = doc(db, "categorias", id);
    await updateDoc(docRef, categoriaAtualizada);
    const categoriasAtualizadas = listaCategorias.map((categoria) =>
      categoria.id === id ? { ...categoria, ...categoriaAtualizada } : categoria
    );
    setListaCategorias(categoriasAtualizadas);
  } catch (error) {
    console.error(error);
  }
};

export const deleteCategoria = async (
  { id },
  listaCategorias,
  setListaCategorias
) => {
  try {
    await deleteDoc(doc(db, "categorias", id));
    const categoriasAtualizadas = listaCategorias.filter(
      (categoria) => categoria.id !== id
    );
    setListaCategorias(categoriasAtualizadas);
  } catch (error) {
    console.error(error);
  }
};

//Função para listar todos os itens cadastrados
export const carregaListaItens = async (setListaItens, setListaFiltrada) => {
  const listaItensRef = collection(db, "itens_do_cardapio");

  try {
    const querySnapshot = await getDocs(listaItensRef);
    const listaItens = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setListaItens(listaItens);
    setListaFiltrada(listaItens);
  } catch (error) {
    console.log("Error getting documents: ", error);
  }
};

export async function uploadImage(uri, itemId) {
  if (!uri) return;
  try {
    const response = await fetch(uri);
    const blobImage = await response.blob();
    const imageName = `${itemId}.jpg`;
    const imageRef = ref(storage, `imagens_do_cardapio/${imageName}`);
    console.log(imageRef);
    await uploadBytes(imageRef, blobImage);
    const imageUrl = await getDownloadURL(imageRef);
    console.log(imageUrl);
    return imageUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const addItem = async (
  { nome, valor, descricao, copy, categoria, uri },
  listaItens,
  setListaItens,
  setListaFiltrada
) => {
  try {
    const novoItem = {
      nome: nome,
      valor: valor,
      descricao: descricao,
      copy: copy,
      categoria: categoria,
    };

    const docRef = await addDoc(collection(db, "itens_do_cardapio"), novoItem);
    const novoItemId = docRef.id;
    const url = await uploadImage(uri, novoItemId);
    novoItem.url_img = url;
    const novoItemComId = {
      ...novoItem,
      id: novoItemId,
    };

    await updateDoc(doc(db, "itens_do_cardapio", novoItemId), { url_img: url });
    const novaListaItens = [...listaItens, novoItemComId];
    setListaItens(novaListaItens);
    setListaFiltrada(novaListaItens);
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 401) {
      alert("Você não está autorizado a realizar esta operação.");
    }
    return listaItens;
  }
};

export const updateItem = async (
  { id, nome, valor, descricao, copy, categoria, uri },
  listaItens,
  setListaItens,
  setListaFiltrada
) => {
  console.log(id);
  try {
    const itemRef = doc(db, "itens_do_cardapio", id);
    const updateFields = {
      nome: nome,
      valor: valor,
      descricao: descricao,
      copy: copy,
      categoria: categoria,
    };
    if (uri) {
      const url = await uploadImage(uri, id);
      updateFields.url_img = url;
    }
    await updateDoc(itemRef, updateFields);
    const index = listaItens.findIndex((item) => item.id === id);
    const itemAtualizado = {
      ...listaItens[index],
      nome: nome,
      valor: valor,
      descricao: descricao,
      copy: copy,
      url_img: updateFields.url_img,
    };
    const novaListaItens = [...listaItens];
    novaListaItens[index] = itemAtualizado;
    setListaItens(novaListaItens);
    setListaFiltrada(novaListaItens);
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 401) {
      alert("Você não está autorizado a realizar esta operação.");
    }
  }
};

export const deleteItem = async (
  { id },
  listaItens,
  setListaItens,
  setListaFiltrada
) => {
  try {
    const itemRef = doc(db, "itens_do_cardapio", id);
    await deleteDoc(itemRef);
    await deleteObject(ref(storage, `imagens_do_cardapio/${id}.jpg`));
    const novaListaItens = listaItens.filter((item) => item.id !== id);
    setListaItens(novaListaItens);
    setListaFiltrada(novaListaItens);
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 401) {
      alert("Você não está autorizado a realizar esta operação.");
    }
  }
};

//Função para filtrar pela categoria selecionada
export const filtrarOpcao = (id, setListaFiltrada, listaItens, categorias) => {
  const categoriaEscolhida = categorias.find(
    (categoria) => categoria.id === id
  );
  if (categoriaEscolhida.nome === "Todos") {
    setListaFiltrada(listaItens);
  } else {
    const novaLista = listaItens.filter((item) => item.categoria === id);
    setListaFiltrada(novaLista);
    console.log("entrou");
  }
};
