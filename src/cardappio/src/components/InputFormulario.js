import React from 'react'
import {View, Text, TextInput} from 'react-native'

export default function InputFormulario({label, value, onChangeText}) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
      />
    </View>
    )
}
