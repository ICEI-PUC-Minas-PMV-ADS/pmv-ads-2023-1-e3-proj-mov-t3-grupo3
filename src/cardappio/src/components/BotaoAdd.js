import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import { useUser } from "../common/context/useUser";

export default function BotaoAdd({ onPress, categoria = false  }) {
  //Estado de login passado pelo contexto useUser
  const { signed } = useUser();

  return (
    //Caso o signed seja true, ou seja, caso o usuario esteja logado, ele ira mostrar o botão, que utiliza função (onPress) passada como paramtro vinda do componente pai
    <>
      {signed && (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Icon style={styles.icone} name="add-circle-outline" />
          {categoria &&(<Text>Adicionar categoria</Text>)}
          {!categoria &&(<Text>Adicionar</Text>)}
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  icone: {
    fontSize: 20,
    paddingVertical: 5
  },
});
