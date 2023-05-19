import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

export default function BotaoVisualizarSugestao() {
    const navigation = useNavigation()

    return (
            <TouchableOpacity style={styles.botao} onPress={() => {
                navigation.navigate("Sugestoes")
            }}>
                <Text style={styles.textoBotao} >Visualizar avaliações</Text>
            </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    botao:{
        backgroundColor: "#FEB342",
        paddingHorizontal: 86, 
        paddingVertical: 10, 
        borderRadius: 5,
    },
    textoBotao:{
        // color: "#ffff",
        fontSize: 15,
        lineHeight: 18,
        fontWeight: "bold"
    }
})