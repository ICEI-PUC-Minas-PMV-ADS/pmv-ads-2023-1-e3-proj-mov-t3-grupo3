import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import Icon from "@expo/vector-icons/MaterialIcons";

export default function BotaoVoltar() {
  const navigation = useNavigation()
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.botao} onPress={
            () =>{
                navigation.goBack()
            }
        }>
            <Text><Icon name='arrow-back'/></Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({

})