import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function CardInfo({nome, valor, descricao }) {
//recebe as props ja do objeto passado no index de maneira descontruida

    return (
    <View style={styles.card}>
        <Text style={styles.nomeDoPrato}>{nome}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.preco}>R${valor}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: "#EF4F51",
        borderRadius: 5,
        padding: 15,
        marginVertical: 25,
        marginHorizontal: 15,
        gap: 10,
    },
    nomeDoPrato:{
        color: "#FEB342",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 24
    },
    descricao:{
        color: "#ffff",
    },
    ingredientes:{
        color: "#ffff",
    },
    preco:{
        color: "#ffff",
        fontSize: 24,
        lineHeight: 30,
        fontWeight: "bold"
    }
})