import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function CardSobre({titulo, texto}) {
  return (
    <View style={styles.box}>
      <Text style={styles.tituloBox}>{titulo}</Text>
      <Text style={styles.infoBox}>{texto} </Text>
    </View>
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
