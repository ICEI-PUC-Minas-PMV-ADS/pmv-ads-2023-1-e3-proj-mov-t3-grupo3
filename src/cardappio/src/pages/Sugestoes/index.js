import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { useItem } from '../../common/context/useItem'
import { carregaSugestoes } from '../../services/item-service'
import CardSugestao from './components/CardSugestao'
import BotaoVoltarCardapio from '../../components/BotaoVoltarCardapio'

export default function Sugestoes() {
  const {listaSugestoes, setListaSugestoes} = useItem()
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    carregaSugestoes(setListaSugestoes)
    console.log(listaSugestoes)
    setLoaded(true)
  },[])

  return (
    <ScrollView>
      <View style={styles.page}>
        {listaSugestoes.length === 0 ? (
          <View style={styles.container}>
            <Text style={styles.emptyText}>Você não possui sugestões/avaliações!</Text>
          </View>
        ) : (
          listaSugestoes.map((sugestao) => {
            return loaded && <CardSugestao sugestao={sugestao} />;
          })
        )}
        <View style={styles.buttonContainer}>
          <BotaoVoltarCardapio />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});