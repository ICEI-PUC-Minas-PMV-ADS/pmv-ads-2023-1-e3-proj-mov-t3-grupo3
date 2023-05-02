import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default function InputFormulario({label, value, onChangeText}) {
  return (
    <View>
      <Text style={styles.labelEdit}>{label}</Text>
      <TextInput style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
    )
}

const styles = StyleSheet.create({

    input: {
      height: 50,
      flex: 1,
      backgroundColor: "#eaeaea",
      borderRadius: 10,
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
