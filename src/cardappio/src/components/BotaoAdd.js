import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import { useUser } from "../common/context/useUser";

export default function BotaoAdd({ onPress }) {
  //Estado de login passado pelo contexto useUser
  const { signed } = useUser();

  return (
    //Caso o signed seja true, ou seja, caso o usuario esteja logado, ele ira mostrar o botão, que utiliza função passada como paramtro vinda do componente pai
    <>
      {signed && (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Icon style={styles.icone} name="add-circle-outline" />
          <Text>Adicionar</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  icone: {
    fontSize: 22,
  },
});
