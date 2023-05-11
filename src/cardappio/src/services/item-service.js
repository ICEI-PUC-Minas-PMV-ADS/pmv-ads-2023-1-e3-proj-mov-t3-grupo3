import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import { db, storage } from "../config/firebase";
  import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
  } from "firebase/storage";

//Recebe parametros e atribui a um objeto,assim fazendo uma requisição na API e insere o novo dado no banco e no textosInfo
export async function uploadImage(uri, itemId) {
  if (!uri) return;
  try {
    const response = await fetch(uri);
    const blobImage = await response.blob();
    const imageName = `${itemId}.jpg`; // create the image name using the item's ID
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

export const addItem = async ({nome, valor, descricao, copy, uri}, listaItens, setListaItens, setListaFiltrada) => {
    try {
    const novoItem = {
      nome: nome,
      valor: valor,
      descricao: descricao,
      copy: copy,
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

export const updateItem = async ({id, nome, valor, descricao, copy, uri}, listaItens, setListaItens, setListaFiltrada) => {
    console.log(id);
  try {
    const itemRef = doc(db, "itens_do_cardapio", id);
    const updateFields = {
      nome: nome,
      valor: valor,
      descricao: descricao,
      copy: copy,
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

export const deleteItem = async ({id}, listaItens, setListaItens, setListaFiltrada) => {
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
