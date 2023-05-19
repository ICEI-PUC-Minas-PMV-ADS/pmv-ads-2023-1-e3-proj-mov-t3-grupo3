import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useUser } from "../../../../../common/context/useUser";
import Icon from "@expo/vector-icons/MaterialIcons";

// Componente de cada categoria

export default function Categoria({ categoria, onPress = null, ativaEditar = null, setAtivaEditar = null, setCategoria = null  }) {
    const {signed} = useUser()

  function onPressCategoria(){
    //Caso o onPress seja null, ele entende que se trata de uma edição, assim alterando o estado da categoria e da visualização do fomrulario, caso contrario ele chama a função passada pelo onPress que é a de filtro e passa o id da categoria passada via prop
    if(onPress === null){
      setAtivaEditar(!ativaEditar)
      setCategoria(categoria)
    }else{
      onPress(categoria.id)
    }
  }

  if (signed && categoria.id === '9RplLw0PmAh8I0rWpTLC') {
    return <Text>Todos</Text>; // Retorna nulo para não renderizar a categoria 
  
  }
  return (
      <TouchableOpacity
      onPress={onPressCategoria}
      style={styles.categoria}
    >
      <Text style={[styles.texto,]}>
        {categoria.nome}
      </Text>
      {signed && <Icon name="edit" size={15}/>    }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoria:{
    alignItems: "center"
  }
})
