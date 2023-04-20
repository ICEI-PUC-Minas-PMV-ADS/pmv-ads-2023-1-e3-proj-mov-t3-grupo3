import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import AddEditInfo from "./AddEditInfo";
import { useTextoInfo } from "../../../common/context/useTextoInfo";
import { useUser } from "../../../common/context/useUser";

export default function CardSobre({texto}) {
  const [ativaEditar, setAtivaEditar] = useState(false);
  const {removeInfo} = useTextoInfo()
  const {signed} = useUser()
  function onPreesButtonEditar(){
    setAtivaEditar(!ativaEditar)
  }

  function onPreesButtonRemove(id){
    removeInfo(id)
  }

  return (
    <>
      {!ativaEditar && <View style={styles.box}>
          <Text style={styles.tituloBox}>{texto.titulo}</Text>
          <Text style={styles.infoBox}>{texto.descricao}</Text>
          {signed && <TouchableOpacity onPress={onPreesButtonEditar}>
            <Icon name="edit" />
          </TouchableOpacity>}
          {signed && <TouchableOpacity
            onPress={() => {
              onPreesButtonRemove(texto.id);
            }}
          >
            <Icon name="highlight-remove" />
          </TouchableOpacity>}
        </View>}
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
  },

  tituloBox: {
    color: "#fcb444",
    fontSize: 18,
    fontWeight: "bold",
  },

  infoBox: {
    color: "#fff",
    fontSize: 16,
  },
});
