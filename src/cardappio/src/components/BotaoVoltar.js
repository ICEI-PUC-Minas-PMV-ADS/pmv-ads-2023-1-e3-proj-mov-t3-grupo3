import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export default function BotaoVoltar() {
  const navigation = useNavigation()
    return (
    <View>
        <TouchableOpacity style={style.botao} onPress={
            () =>{
                navigation.goBack()
            }
        }>
            <Text style={style.textoBotao}>Voltar ao Cardápio</Text>
        </TouchableOpacity>
    </View>
    )
}

const style = StyleSheet.create({
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