import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

// Componente com um input para ser reutilizado em formulario, onde recebe algumas propriedades, onde algumas deas possuem valores padrões caso não sejam passadas na chamada do componente.

// Essa cópia foi criada para conseguirmos aumentar o tamanho de alguns formulários em específico

export default function InputFormulario2({label, value, onChangeText, tipo = 'default', maxLength = 300,}) {
  
  return (
    <View>
      <Text style={styles.labelEdit}>{label}</Text>
      <TextInput style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={tipo}
        maxLength={maxLength}
        numberOfLines={5}
        multiline = {true}
      />
    </View>
    )
}

const styles = StyleSheet.create({

  // estilização dos campos de alteração / edição 
    input: {
      height: 100,
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
