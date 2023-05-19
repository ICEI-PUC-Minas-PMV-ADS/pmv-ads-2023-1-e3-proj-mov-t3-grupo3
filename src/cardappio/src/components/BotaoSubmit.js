import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

//Componente de botao para envio ou cancelamento dos formularios, por padrão o texto exibido sera Salvar, a função é passada como paramatro

export default function BotaoSubmit({onPress, textoBotao = "Salvar"}) {
    
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.botao} onPress={onPress}>
            <Text style={styles.textoBotao}>{textoBotao}</Text>
        </TouchableOpacity>
    </View>
    )
}

// estilização dos botões (Salvar | Deletar | Cancelar)
const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 15,
    },
    // estilização abaixo desnecessária (desabilitada por Anderson Marques)
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