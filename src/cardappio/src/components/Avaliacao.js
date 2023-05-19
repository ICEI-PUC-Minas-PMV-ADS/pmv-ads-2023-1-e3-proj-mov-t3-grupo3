import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Estrelas from "./Estrelas";
import { useItem } from "../common/context/useItem";
import {calcularMediaAvaliacoes} from '../services/item-service';

export default function Avaliacao({ item }) {
  const [avaliacao, setAvaliacao] = useState(0);
  const [loaded, setLoaded] = useState(false)
  const {listaItens} = useItem()
  const [itemSelecionado, setItemSelecionado] = useState(item || listaItens.find((item) => item.nome === "Estabelecimento"))

useEffect(()=>{
  const fetchMediaAvaliacoes = async () => {
    const media = await calcularMediaAvaliacoes(itemSelecionado.id);
    console.log(media)
    setAvaliacao(media)
    setLoaded(true) 
  };  
  fetchMediaAvaliacoes();
},[])
  
  return (
   <View style={styles.avalicao}>
      <Text style={styles.avaliacaoText}>Avaliação dos Clientes:</Text>
      {loaded &&  <Estrelas quantidade={avaliacao}/> }
    </View>
  );
}

const styles = StyleSheet.create({
  avalicao: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center'
  },

  avaliacaoText: {
    color: "#f04c54",
    fontSize: 16,
    fontWeight: "bold",
  },
});
