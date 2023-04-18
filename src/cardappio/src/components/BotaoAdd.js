import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from "@expo/vector-icons/Ionicons";


export default function BotaoAdd({onPress}) {
  return (
    <View>
    <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon style={styles.icone} name='add-circle-outline'/>
            <Text>Adicionar</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    icone:{
        fontSize: 22,
    }
})