import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Estrelas from '../../../components/Estrelas';

export default function CardSugestao({ sugestao }) {
  useEffect(() => {
    console.log(sugestao);
  }, []);

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.nomeItem}>{sugestao.nomeItem}</Text>
      <Estrelas quantidade={sugestao.valor} />
      <Text style={styles.textoSugestao}>{sugestao.texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    width: "90%",
  },
  nomeItem: {
    color: '#EF4F51',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textoSugestao: {
    color: 'black',
    fontSize: 14,
  },
});