import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

export default function BotaoVoltar() {
  const navigation = useNavigation()
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.botao} onPress={
            () =>{
                navigation.goBack()
            }
        }>
        </TouchableOpacity>
    </View>
    )
}