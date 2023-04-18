import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import InputFormulario from '../../../components/InputFormulario'
import BotaoSubmit from '../../../components/BotaoSubmit'
import { useTextoInfo } from "../../../common/context/useTextoInfo"

export default function AddEditInfo({onPress, texto = null}) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const { addInfo, updateInfo } = useTextoInfo();

  function onPressSalvar(){
    if(texto !=null){
      updateInfo(texto.id, titulo, descricao)
      console.log(titulo, descricao)
      onPress();
    }else{
      addInfo(titulo, descricao)
      setTitulo('')
      setDescricao('')
      onPress()  
    }
  }

  function onPressCalcelar(){
    onPress()
  }

  useEffect(()=>{
    if(texto != null){
      setTitulo(texto.titulo);
      setDescricao(texto.descricao);  
    }
  }, [])

  return (
    <View>
      <Text>Adicionar Informação</Text>
      <InputFormulario label="Titulo" value={titulo} onChangeText={setTitulo}/>
      <InputFormulario label="Descrição" value={descricao} onChangeText={setDescricao}/>
      <BotaoSubmit onPress={onPressSalvar}/>
      <BotaoSubmit onPress={onPressCalcelar} textoBotao={"Cancelar"}/>
    </View>
  )
}

