import { React, useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";

import { Text } from "react-native";
import InputFormulario from "../../../components/InputFormulario";
import BotaoSubmit from "../../../components/BotaoSubmit";
import * as ImagePicker from "expo-image-picker";
import { addItem, updateItem } from "../../../services/item-service";
import { useItem } from "../../../common/context/useItem";

export default function FormularioAddEditItem({ tituloForm, onPress, item }) {
  //Controle de estado para os inputs do formulairo
  const [nome, setNome] = useState(item?.nome || "");
  const [valor, setValor] = useState(item?.valor || "");
  const [descricao, setDescricao] = useState(item?.descricao || "");
  const [copy, setCopy] = useState(item?.copy || "");
  const [uri, setUri] = useState(item?.url_img || "");
  const [categoria, setCategoria] = useState(item?.categoria || null);
  
  //Controle de estado do modal
  const [modalVisible, setModalVisible] = useState(false);

  //listas e funções passadas pelo contexto do item para controle de estado
  const { listaItens, setListaItens, setListaFiltrada, listaCategorias } =
    useItem();

  //Função para abrir galeria e escolher imagem
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // A imagem foi selecionada
      setUri(result.assets[0].uri);
    }
  };

  function onPressSalvar() {
    //Caso a prop item do componente seja diferente de null, ela cai na opção de edição do item
    if (item != null) {
      const id = item.id;
      updateItem(
        { id, nome, valor, descricao, copy, categoria, uri },
        listaItens,
        setListaItens,
        setListaFiltrada
      );
      onPress();
    } else {
      //Caso a prop item do componente seja igual de null, ela cai na opção de edição do item
      addItem(
        { nome, valor, descricao, copy, categoria, uri },
        listaItens,
        setListaItens,
        setListaFiltrada
      );
      setNome("");
      setValor("");
      setDescricao("");
      setCopy("");
      setUri("");
      onPress();
    }
  }

  function onPressCancelar() {
    onPress();
  }

  //Função que "edita" o valor digitado pelo usuario
  useEffect(() => {
    let valorFormatado = valor.replace(/[^\d]/g, "");
    valorFormatado > 2
      ? (valorFormatado =
          valorFormatado.slice(0, -2) + "," + valorFormatado.slice(-2))
      : valorFormatado;
    setValor(valorFormatado);
  }, [valor]);

  //Componente das categorias do modal
  const renderCategoria = (categoria) => (
    <TouchableOpacity
      onPress={() => {
        setCategoria(categoria.id);
        setModalVisible(false);
      }}
      style={styles.categoria}
    >
      <Text>{categoria.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text>{tituloForm}</Text>
      <InputFormulario label={"Nome"} value={nome} onChangeText={setNome} />

      <InputFormulario
        label={"Valor"}
        value={valor}
        onChangeText={setValor}
        tipo={"numeric"}
        maxLength={6}
      />
      <InputFormulario
        label={"Descrição"}
        value={descricao}
        onChangeText={setDescricao}
        numberOfLines={3}
        multiline={true}
      />
      <InputFormulario
        label={"Copy"}
        value={copy}
        onChangeText={setCopy}
        numberOfLines={2}
        multiline={true}
      />
      {/* Botao para escolha da imagem */}
      <TouchableOpacity onPress={pickImage}>
        {uri && uri !== "" ? (
          <Image source={{ uri }} style={{ width: 200, height: 200 }} />
        ) : (
          <Text>Imagem não selecionada</Text>
        )}
        <Text>Adicionar imagem</Text>
      </TouchableOpacity>
      
      {/* Botao de seleção de categoria */}
      <View>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Categoria</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.input}>
              {categoria
                ? listaCategorias.find((c) => c.id === categoria)?.nome
                : "Selecionar categoria"}
            </Text>
          </TouchableOpacity>

          {/* Modal que sera aberto ao clicar no botao e sera fechado ao clicar no cancelar ou em qualquer outro lugar da tela que não seja as opões */}
          <Modal visible={modalVisible} animationType="fade" transparent={true}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => setModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <FlatList
                    data={listaCategorias.filter(
                      (item) => item.nome != "Todos"
                    )}
                    renderItem={({ item }) => renderCategoria(item)}
                    keyExtractor={(item) => item.id.toString()}
                  />
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={styles.cancelButton}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
      </View>
      <View style={styles.botoes}>
        <BotaoSubmit onPress={onPressSalvar} />
        <BotaoSubmit onPress={onPressCancelar} textoBotao={"Cancelar"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
    width: "60%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  cancelButton: {
    textAlign: "center",
    marginTop: 10,
    color: "#EF4F51",
    fontSize: 18,
  },
  categoria: {
    padding: 15,
    justifyContent: "center",
  },
});
