import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export default function BotaoVoltar() {
  const navigation = useNavigation()
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.botao} onPress={
            () =>{
                navigation.goBack()
            }
        }>
            <Text style={styles.textoBotao}>Voltar ao Cardápio</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        marginTop: 20,
        marginBottom: 15,
    },
    botao:{
        backgroundColor: "#EF4F51",
        paddingHorizontal: 86,
        paddingVertical: 10,
        borderRadius: 5,
    },
    textoBotao:{
        color: "#ffff",
        fontSize: 15,
        lineHeight: 18,
        fontWeight: "bold"
    }
})