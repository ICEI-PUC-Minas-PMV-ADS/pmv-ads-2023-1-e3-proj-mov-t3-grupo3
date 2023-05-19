import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity,  } from 'react-native'
import { useItem } from '../common/context/useItem'
import Estrelas from '../components/Estrelas'
import { addSugestao, addAvaliacao } from '../services/item-service'
import InputFormulario2 from './InputFormulario2'
import { useUser } from "../common/context/useUser";
import BotaoVisualizarSugestao from "../components/BotaoVisualizarSugestao";


export default function AvalicaoESugestao({item}) {
  const [texto, setTexto] = useState('');
  const [avaliacao, setAvaliacao] = useState(0);
  const { listaItens } = useItem();
  const [itemSelecionado, setItemSelecionado] = useState(item || listaItens.find((item) => item.nome === "Estabelecimento"))
  const navigation = useNavigation()
  const {signed} = useUser()

  function onPressSubmit() {
    const sugestao = {
      nomeItem: itemSelecionado.nome,
      texto: texto,
      valor: avaliacao
    };
    addSugestao(sugestao);
    addAvaliacao(itemSelecionado.id, avaliacao)
    setAvaliacao(0);
    setTexto('');
    navigation.navigate("Home")
  }


  return (
    <>
   { !signed ? ( 
    <View style={styles.container}>
      <Text style={styles.titulo} >Deixe uma avaliação e sugestão</Text>
      {item !== null ? <Estrelas quantidade={avaliacao} editavel={true} onPressStar={setAvaliacao}/> : <Estrelas quantidade={avaliacao} onPressStar={setAvaliacao}/> }
      <View style={styles.form}>
        <InputFormulario2 value={texto} onChangeText={setTexto}/>
      </View>
      <TouchableOpacity onPress={()=> onPressSubmit()} style={styles.botao}>
          <Text style={styles.textoBotao}>Enviar</Text>
        </TouchableOpacity>
    </View> ) : 
    ( <BotaoVisualizarSugestao/> )}
  </>
  )
}

const styles = StyleSheet.create({
  container:{
    borderColor: '#EF4F51',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    marginTop: 20
  },
  titulo:{
    color: '#EF4F51'
  },
  form:{
    width:"100%"
  },
  input: {
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingLeft: 10,
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
  },

  botao:{
    backgroundColor:'#EF4F51',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5
  },

  textoBotao:{
    color: '#ffff'
  }
})