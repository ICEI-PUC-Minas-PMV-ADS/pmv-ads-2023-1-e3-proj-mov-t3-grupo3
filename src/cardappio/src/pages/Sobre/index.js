import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CardSobre from "./components/CardSobre";
import BotaoVoltarCardapio from "../../components/BotaoVoltarCardapio";
import Logo from "../../../assets/cardappio-logo.png";
import Icon from "@expo/vector-icons/MaterialIcons";
import BotaoAdd from "../../components/BotaoAdd";
import { useTextoInfo } from "../../common/context/useTextoInfo.js";
import AddEditInfo from "./components/AddEditInfo";

export default function Sobre() {
  const { textosInfo } = useTextoInfo();
  const [ativaNovaInfo, setAtivaNovaInfo] = useState(false);

  const textos = textosInfo;
  
  function onPressButtonAdd() {
    setAtivaNovaInfo(!ativaNovaInfo);
  }

  
  return (
    <ScrollView style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.aboutText}>Sobre o Restaurante</Text>
        <Image style={styles.cardappioLogoImg} source={Logo} />
        <Text style={styles.nomeText}>Cardappio</Text>
      </View>

      <View style={styles.avalicao}>
        <Text style={styles.avaliacaoText}>Avaliação dos Clientes:</Text>
      </View>

      {textos.map((texto) => (
          <CardSobre key={texto.id} texto={texto}/>
      ))}

      {!ativaNovaInfo && <BotaoAdd onPress={onPressButtonAdd} />}
      {ativaNovaInfo && <AddEditInfo onPress={onPressButtonAdd}/>}

      <BotaoVoltarCardapio />

      <View style={styles.boxAvaliacao}>
        <Text style={styles.tituloBoxAvaliacao}>
          Faça sua avaliação e deixe uma sugestão...
        </Text>
      </View>

      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.buttonLoginText}>
          Faça login para editar o cardápio
        </Text>
        <Icon name="login" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  header: {
    paddingTop: 50,
    alignItems: "center",
  },

  //texto Sobre o Restaurante
  aboutText: {
    color: "#f04c54",
    fontSize: 16,
    fontWeight: "900",
    paddingBottom: 10,
  },

  //Logo
  cardappioLogoImg: {
    borderRadius: 10,
    width: 120,
    height: 120,
  },

  //texto Cardappio
  nomeText: {
    color: "#f04c54",
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 10,
    marginBottom: 20,
  },

  //texto Avaliação dos Clientes
  avalicao: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginLeft: 30,
  },

  avaliacaoText: {
    color: "#f04c54",
    fontSize: 16,
    fontWeight: "bold",
  },

  //card de avaliação
  boxAvaliacao: {
    borderWidth: 2,
    borderColor: "#f04c54",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },

  tituloBoxAvaliacao: {
    color: "#f04c54",
    fontSize: 16,
  },

  //botão final e login
  buttonLogin: {
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },

  buttonLoginText: {
    color: "#f04c54",
    fontSize: 16,
  },
});
