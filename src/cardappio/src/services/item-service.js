//Arquivo de serviços dos itens do cardapio
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where
} from "firebase/firestore";
import { db, storage } from "../config/firebase";
import {
  ref,
  uploadBytesResumable,
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
    const indexTodos = listaCategorias.findIndex(categoria => categoria.nome === "Todos");
  if (indexTodos !== -1) {
    const todosCategoria = listaCategorias[indexTodos];
    listaCategorias.splice(indexTodos, 1);
    listaCategorias.unshift(todosCategoria);
  }

    setCategorias(listaCategorias);

  } catch (error) {
    if (error.code === "permission-denied") {
      alert("Você não está autorizado a realizar esta operação.");
    }
  }
};

export const addCategoria = async (
  { nome },
  setListaCategoria,
  listaCategorias
) => {
  try {
    if (!nome || nome.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return ;
    } 

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
    if (error.code === "permission-denied") {
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
  if (!nome || nome.trim() === "") {
    alert("Por favor, preencha todos os campos.");
    return ;
  }

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
    if (error.code === "permission-denied") {
      alert("Você não está autorizado a realizar esta operação.");
    }
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
    if (error.code === "permission-denied") {
      alert("Você não está autorizado a realizar esta operação.");
    }
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
    const listaItensSemEstablecimento = listaItens.filter((item) => item.nome !== "Estabelecimento")
    setListaItens(listaItens);
    setListaFiltrada(listaItensSemEstablecimento);
  } catch (error) {
    console.log("Error getting documents: ", error);
    if (error.code === "permission-denied") {
      alert("Você não está autorizado a realizar esta operação.");
    }
  }
};

export async function uploadImage(uri, itemId) {
  if (!uri) return;
  try {
    console.log(uri)
    const response = await fetch(uri);
    const blobImage = await response.blob();
    const imageName = `${itemId}.jpg`;
    const imageRef = ref(storage, `imagens_do_cardapio/${imageName}`);
    
    
    try {
      const uploadTask = uploadBytesResumable(imageRef, blobImage);
      await new Promise((resolve, reject) => {
        uploadTask.on('state_changed', null, reject, resolve);
      });
    } catch (uploadError) {
      console.error('Error during image upload:', uploadError);
      // Tratar o erro de upload conforme necessário
      // Por exemplo, mostrar uma mensagem de erro ao usuário
      return null;
    }
    
    const imageUrl = await getDownloadURL(imageRef);

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

  if (!nome || nome.trim() === "" || !valor || valor.trim() === "" || !categoria || !uri) {
    alert("Por favor, preencha todos os campos.");
    return ;
  }

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
    const listaItensSemEstablecimento = novaListaItens.filter((item) => item.nome !== "Estabelecimento")
    setListaItens(novaListaItens);
    setListaFiltrada(listaItensSemEstablecimento);
  } catch (error) {
    console.error(error);
    if (error.code === "permission-denied") {
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
  try {
    if (!nome || nome.trim() === "" || !valor || valor.trim() === "" || !categoria || !uri) {
      alert("Por favor, preencha todos os campos.");
      return ;
    }

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

    const listaItensSemEstablecimento = novaListaItens.filter((item) => item.nome !== "Estabelecimento")
    setListaItens(novaListaItens);
    setListaFiltrada(listaItensSemEstablecimento);
  } catch (error) {
    console.error(error);
    if (error.code === "permission-denied") {
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

    // Obter todas as avaliações com idItem igual a id
    const avaliacoesQuery = query(
      collection(db, "avaliacoes"),
      where("idItem", "==", id)
    );
    const avaliacoesSnapshot = await getDocs(avaliacoesQuery);

    // Excluir cada avaliação individualmente
    avaliacoesSnapshot.forEach(async (doc) => {
      const avaliacaoRef = doc(db, "avaliacoes", doc.id);
      await deleteDoc(avaliacaoRef);
    });

    const novaListaItens = listaItens.filter((item) => item.id !== id);
    const listaItensSemEstablecimento = novaListaItens.filter(
      (item) => item.nome !== "Estabelecimento"
    );
    setListaItens(novaListaItens);
    setListaFiltrada(listaItensSemEstablecimento);
  } catch (error) {
    if (error.code === "permission-denied") {
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
    const listaItensSemEstablecimento = listaItens.filter((item) => item.nome !== "Estabelecimento")
    setListaFiltrada(listaItensSemEstablecimento);
  } else {
    const novaLista = listaItens.filter((item) => item.categoria === id);
    setListaFiltrada(    novaLista.filter((item) => item.nome !== "Estabelecimento")
    );
  }
};


export const carregaSugestoes = async(setListaSugestoes) => {
  const sugestoesRef = collection(db, "sugestoes");
  try {
    const querySnapshot = await getDocs(sugestoesRef);
    const listaSugestoes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setListaSugestoes(listaSugestoes);
  } catch (error) {
    if (error.code === "permission-denied") {
      alert("Você não está autorizado a realizar esta operação.");
    }
  }
}


export const addSugestao = async (sugestao) => {
  try {
    const sugestaoRef = collection(db, "sugestoes");
    // Insere a sugestão no banco "sugestoes"
    await addDoc(sugestaoRef, {
      nomeItem: sugestao.nomeItem,
      valor: sugestao.valor,
      texto: sugestao.texto,
    });
  } catch (error) {
    console.error("Erro ao inserir a sugestão:", error);
  }
};


export const addAvaliacao = async (itemId, avaliacao) => {
  try {
    const avaliacaoRef = collection(db, "avaliacoes");
    if (!avaliacao) {
      alert("Por favor, escolha uma nota!");
      return ;
    }
    // Salva a avaliação na coleção "avaliacoes"
    await addDoc(avaliacaoRef, {
      idItem: itemId,
      valor: avaliacao,
    });

    alert("Avaliação e sugestão feita com sucesso!");
  } catch (error) {
    if (error.code === "permission-denied") {
      alert("Você não está autorizado a realizar esta operação.");
    }  }
};

export const calcularMediaAvaliacoes = async (itemId) => {
  try {
    const avaliacoesRef = collection(db, "avaliacoes");

    // Consulta as avaliações filtrando pelo id do item
    const querySnapshot = await getDocs(query(avaliacoesRef, where("idItem", "==", itemId)));

    let soma = 0;
    let quantidade = 0;

    // Calcula a soma e a quantidade de avaliações encontradas
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data && data.valor) {
        const avaliacao = data.valor;
        soma += avaliacao;
        quantidade++;
      }
    });

    const media = quantidade > 0 ? soma / quantidade : 0;

    return media;
  } catch (error) {
    console.error("Erro ao calcular a média das avaliações:", error);
    return 0;
  }
};
