import React, { useEffect, useState } from 'react'
import { View, StyleSheet} from "react-native";
import InputFormulario from '../../../../../components/InputFormulario'
import BotaoSubmit from '../../../../../components/BotaoSubmit'
import { useItem } from '../../../../../common/context/useItem'
import { addCategoria, updateCategoria, deleteCategoria } from '../../../../../services/item-service'

export default function FormularioAddEditCategoria({onPress, categoria = null}) {
  //Controle de estado do input do nome da categoira 
  const [nome, setNome] = useState(categoria?.nome || "")
  
  //Controle de estado vindos pelo contexto do Item
  const {listaCategorias, setListaCategorias} = useItem()  


  function onPressBotaoSalvar(){
    //Caso a categoria vinda via Prop seja diferente de null ele entende que sera uma edição
    if(categoria != null){
      const id = categoria.id;
      updateCategoria({id, nome}, listaCategorias, setListaCategorias)
      setNome('')
      onPress() 
    }else{
      addCategoria({nome}, setListaCategorias, listaCategorias)
      setNome('')
      onPress() 
    }
  }

  function onPressDeletar(){
    const id = categoria.id
    deleteCategoria({id}, listaCategorias, setListaCategorias)
    onPress() 
  }

  return (
    <>
    <View style={styles.alteracao}>
      <InputFormulario label={"Nome da categoria:"} value={nome} onChangeText={setNome}/>
    </View>
      <BotaoSubmit onPress={onPressBotaoSalvar}/>
      {categoria != null && <BotaoSubmit onPress={onPressDeletar} textoBotao={"Deletar"}/>}
      <BotaoSubmit onPress={onPress} textoBotao={"Cancelar"}/>
    </>
  )
}

const styles = StyleSheet.create({

  //edição do nome das categorias (adm logado)
  alteracao: {
    marginTop: 5,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 2,
    borderRadius: 10,
    padding: 15,
  },

});