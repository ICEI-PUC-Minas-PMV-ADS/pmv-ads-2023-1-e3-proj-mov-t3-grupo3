import { React, useEffect, useState } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Text } from "react-native";
import InputFormulario from "../../../components/InputFormulario";
import BotaoSubmit from "../../../components/BotaoSubmit";
import * as ImagePicker from "expo-image-picker";
import { addItem, updateItem } from "../../../services/item-service";
import { useItem } from "../../../common/context/useItem";

export default function FormularioAddEditItem({ tituloForm, onPress, item }) {
  const [nome, setNome] = useState(item?.nome || "");
  const [valor, setValor] = useState(item?.valor || "")
  const [descricao, setDescricao] = useState(item?.descricao || "");
  const [copy, setCopy] = useState(item?.copy || "");
  const [uri, setUri] = useState(item?.url_img || "");
  const {listaItens, setListaItens, setListaFiltrada} = useItem()

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
    if (item != null) {
      const id = item.id
      updateItem({id, nome, valor, descricao, copy, uri}, listaItens, setListaItens, setListaFiltrada);
      onPress();
    } else {
      addItem({nome, valor, descricao, copy, uri}, listaItens, setListaItens, setListaFiltrada);
      setNome("");
      setValor("");
      setDescricao("");
      setCopy("");
      setUri("");
      onPress();
    }
  }

  function onPressCalcelar() {
    onPress();
  }

  useEffect(() => {
    let valorFormatado = valor.replace(/[^\d]/g, "");
    valorFormatado > 2
      ? (valorFormatado =
          valorFormatado.slice(0, -2) + "," + valorFormatado.slice(-2))
      : valorFormatado;
    setValor(valorFormatado);
  }, [valor]);

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

      <TouchableOpacity onPress={pickImage}>
        {uri && uri !== "" ? (
          <Image source={{ uri }} style={{ width: 200, height: 200 }} />
        ) : (
          <Text>Imagem não selecionada</Text>
        )}
        <Text>Adicionar imagem</Text>
      </TouchableOpacity>

      <BotaoSubmit onPress={onPressSalvar} />
      <BotaoSubmit onPress={onPressCalcelar} textoBotao={"Cancelar"} />
    </View>
  );
}