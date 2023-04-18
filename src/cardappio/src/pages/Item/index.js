import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import {  useRoute } from '@react-navigation/native'
import CardInfo from './components/CardInfo'
import BotaoVoltarCardapio from '../../components/BotaoVoltarCardapio'

export default function Item() {
  const route = useRoute()
  const item = route.params

  return (
    <View style={styles.page}>
      <Text style={styles.titulo}>Detalhe do produto</Text>
      <Image style={styles.imagem} source={{ uri: item.url_img }}/>
      <CardInfo {...item}/>
      <BotaoVoltarCardapio/>
    </View>
  )
}

const styles = StyleSheet.create({
  page:{
    flex: 1,
    alignItems: "center"
  },
  imagem:{
    width: 302,
    height: 302,
    borderRadius: 32
  },
  titulo:{
    color: "#EF4F51",
    fontSize: 15,
    lineHeight: 18,
    fontWeight: "bold",
    paddingVertical: 25
  }
})


