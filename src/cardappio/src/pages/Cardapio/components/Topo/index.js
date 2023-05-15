import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Logo from "../../../../../assets/cardappio-logo.png";
import Icon from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../../../../common/context/useUser";
import { useItem } from "../../../../common/context/useItem";
import Categorias from "./components/Categorias";

export default function Topo() {
  const navigation = useNavigation()
  //usuario e estado do login retornado pelo contexto useUser
  const { signed } = useUser()
  const [pesquisa, setPesquisa] = useState('')
  const {listaItens, setListaFiltrada} = useItem() 
  const [categorias, setCategorias] = useState([])

  useEffect(()=> {

    filtrarPesquisa(pesquisa, listaItens, setListaFiltrada) 
  },[pesquisa])



  useEffect(() => {

    filtrarPesquisa("");
  }, [filtrarPesquisa]);

  const filtrarPesquisa = (valorCampo) => {
    const novaLista = listaItens.filter((item) =>
      item.descricao.toLowerCase().includes(valorCampo.toLowerCase())
    );
    setListaFiltrada(novaLista);
  };

  return (
    <>
    {/* Botao com redirecionamento para a pagina de sobre */}
      <TouchableOpacity style={styles.topo} onPress={
        () => {
          navigation.navigate("Sobre")
        } 
      }>
        <Image style={styles.imagem} source={Logo} />
        <View style={styles.textoTopo}>
          <Text style={styles.tituloTopo}>Cardappio</Text>
          <Text style={styles.subtituloTopo}>Ver mais</Text>
        </View>
      </TouchableOpacity>
      {/* Condição dizendo que caso o signed seja true, ele ira mostrar o componente Text, que contem o nome do usuario logado */}
      <View style={styles.nomeEditar}>
      {signed && <Text>Olá admin!</Text>}
      </View>

      <View style={styles.pesquisa}>
        <TextInput
          style={StyleSheet.flatten([
            styles.elementosPesquisa,
            styles.campoPesquisa,
          ])}
          placeholder="Ferramenta de pesquisa"
          placeholderTextColor={"#FEB342"}
          onChangeText={(text) => {
            setPesquisa(text)
          }}
          value={pesquisa}
        />
        <TouchableOpacity>
          <Icon
            style={StyleSheet.flatten([
              styles.elementosPesquisa,
              styles.iconePesquisa,
            ])}
            name="search"
          />
        </TouchableOpacity>
      </View>

      
      <Categorias categorias={categorias} setCategorias={setCategorias}/>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    padding: 15,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  textoTopo:{
    marginHorizontal: 15,
    gap: 10,
    },
  tituloTopo:{
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 20,
    color: "#EF4F51"
  },
  subtituloTopo:{
    color: "#EF4F51"
  },

  nomeEditar: {
    flex: 1,
    alignItems: 'flex-end',
    marginLeft: 20,
    marginRight: 20,
  }, 

  pesquisa: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EF4F51",
    marginVertical: 30,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  elementosPesquisa: {
    color: "#FEB342",
    alignItems: "center",
  },
  campoPesquisa: {
    padding: 5,
  },
  iconePesquisa: {
    padding: 5,
  },
  imagem:{
    width: 88,
    height: 88
  }
});
