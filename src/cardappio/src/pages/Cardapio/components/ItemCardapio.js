import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";

export default function ItemCardapio({
  nome,
  valor,
  url_img,
  copy,
  aoPressionar,
}) {
  return (
    //Cada card em forma de "botao" com redirecionamento para sua pagina, "acionando" a função que foi passada como parametro na chamada do componente
    <TouchableOpacity style={styles.card} onPress={aoPressionar}>
      <View style={styles.cardInfo}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.copy}>{copy}</Text>
        <Text style={styles.preco}>R${valor}</Text>
      </View>
      <View>
        <Image style={styles.imagem} source={{ uri: url_img }} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "#EF4F51",
    margin: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardInfo: {
    width: "70%",
  },
  imagem: {
    width: 75,
    height: 75,
  },
  nome: {
    color: "#FEB342",
    fontWeight: "bold",
  },
  copy: {
    color: "#ffff",
    paddingVertical: 10,
  },
  preco: {
    color: "#ffff",
    fontWeight: "bold",
  },
});
