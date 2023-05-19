import React from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import CardInfo from "./components/CardInfo";
import BotaoVoltarCardapio from "../../components/BotaoVoltarCardapio";
import AvalicaoESugestao from "../../components/AvalicaoESugestao";
import Avaliacao from "../../components/Avaliacao";
import { useUser } from "../../common/context/useUser";
import BotaoVisualizarSugestao from "../../components/BotaoVisualizarSugestao";

export default function Item() {
  //utilizando o hook route, para que receba os parametros passados no redirecionamento, no caso um objeto e foi atribuido a uma constante
  const route = useRoute();
  const item = route.params;

  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={styles.titulo}>Detalhe do produto</Text>
        {/* Busca a imagem no objeto criado a partir dos parametros da rota */}
        <Image style={styles.imagem} source={{ uri: item.url_img }} />
        <Avaliacao item={item}/>
        {/* chamada do componente passando como parametro a descontrução do objeto item */}
        <CardInfo {...item} />
        
        <AvalicaoESugestao item={item} />
        
        <BotaoVoltarCardapio />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
  },
  imagem: {
    width: 302,
    height: 302,
    borderRadius: 32,
  },
  titulo: {
    color: "#EF4F51",
    fontSize: 15,
    lineHeight: 18,
    fontWeight: "bold",
    paddingVertical: 25,
  },
});
