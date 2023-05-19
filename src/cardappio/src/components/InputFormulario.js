import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

// Componente com um input para ser reutilizado em formulario, onde recebe algumas propriedades, onde algumas deas possuem valores padrões caso não sejam passadas na chamada do componente

export default function InputFormulario({label, value, onChangeText, tipo = 'default', maxLength = 300}) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.labelEdit}>{label}</Text>
      <TextInput style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={tipo}
        maxLength={maxLength}
      />
    </View>
    )
}

const styles = StyleSheet.create({

  // estilização dos campos de alteração / edição
  input: {
      height: 40,
      backgroundColor: "#eaeaea",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#ccc",
      paddingLeft: 10,
      fontSize: 15,
      marginTop: 5,
      marginBottom: 10,
    },

    labelEdit: {
      fontWeight: "bold",
    },
});
