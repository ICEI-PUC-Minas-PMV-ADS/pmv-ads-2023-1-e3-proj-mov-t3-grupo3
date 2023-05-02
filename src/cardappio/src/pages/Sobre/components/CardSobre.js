import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import AddEditInfo from "./AddEditInfo";
import { useTextoInfo } from "../../../common/context/useTextoInfo";
import { useUser } from "../../../common/context/useUser";

export default function CardSobre({texto}) {
  
  //Estado do formulario de edição
  const [ativaEditar, setAtivaEditar] = useState(false);
  //Função retornada pelo contexto useTextInfo
  const {removeInfo} = useTextoInfo()
  //Controle de estado de login retornado pelo contexto useUser
  const {signed} = useUser()

  //Função para alterar o estado do formulario de edição uma informação
  function onPreesButtonEditar(){
    setAtivaEditar(!ativaEditar)
  }

  return (
    //caso o estado de edução seja false, ele ira mostrar os botões de edição e de exclusão
    <>
      {!ativaEditar && <View style={styles.box}>
          <Text style={styles.tituloBox}>{texto.titulo}</Text>
          <Text style={styles.infoBox}>{texto.descricao}</Text>
          {/* Os botões de edição e exclusão so iram aparecer caso o estado signed seja true */}
          <View style={styles.positionicons}>
          {signed && <TouchableOpacity onPress={onPreesButtonEditar}>
            <Icon name="edit" size={20}/>
          </TouchableOpacity>}
          {signed && <TouchableOpacity
            onPress={() => {
              removeInfo(texto.id);
            }}
          >
            <Icon name="highlight-remove" size={20}/>
          </TouchableOpacity>}
          </View>
        </View>}
        {/* Caso o estado de Editar seja true, ele ira esconder o "Card" do texto e ira mostrar o campo de edição */}
      {ativaEditar && <AddEditInfo tituloForm={"Editar"} onPress={onPreesButtonEditar} texto={texto}/>}
    </>
  );
}

const styles = StyleSheet.create({
  //Cards
  box: {
    backgroundColor: "#f04c54",
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5,
    borderRadius: 10,
    padding: 15,
    flex: 1,
  },

  tituloBox: {
    color: "#fcb444",
    fontSize: 18,
    fontWeight: "bold",
    //backgroundColor: "#FF0000",
  },

  infoBox: {
    color: "#fff",
    fontSize: 16,
    //backgroundColor: "#fcb444",
  },

  positionicons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 8,
    //backgroundColor: "#05a5d8", 
  },

});
