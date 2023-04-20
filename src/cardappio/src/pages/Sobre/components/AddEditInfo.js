import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import InputFormulario from '../../../components/InputFormulario'
import BotaoSubmit from '../../../components/BotaoSubmit'
import { useTextoInfo } from "../../../common/context/useTextoInfo"

//O componente recebe como prop, um titulo, uma função e um objeto (texto), que caso não seja passado tem como padrão o valor null
export default function AddEditInfo({tituloForm, onPress, texto = null}) {
  //Controle do estado dos inputs
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  
  //Funções retonradas pelo contexto useTextInfo
  const { addInfo, updateInfo } = useTextoInfo();

  //Caso seja passado um objeto na prop texto, indica que esta se tratando de uma edição de uma informação, caindo na primeira condição e caso não seja passado nada ou seja o texto seja null, caira na segunda condição
  function onPressSalvar(){
    if(texto !=null){
      updateInfo(texto.id, titulo, descricao)
      onPress();
    }else{
      addInfo(titulo, descricao)
      setTitulo('')
      setDescricao('')
      onPress()  
    }
  }

  //Como é utilizado o memsmo botão de Salvar e cancelar, tanto para o formulario de inserção quanto o de edição, foi passado o parametro de onPress, que ira informação o que ele deve fazer ao clicar no botão de cancelar, pois ele tera que esconder o formulario de edição e exibir novamente a informação, ou apenas esconder o formulario de inserção e exibir o botão de inserção
  function onPressCalcelar(){
    onPress()
  }

  //Ao carregar a pagina o useEffect é acionado, e verifica o se o objeto texto é diferente de null, ou seja, contenha alguma informação. Apos a verificação ele passa os dados para os estados do input, para que ja apareça as informações nos campos de digitação e para que não de erro na hora de salvar sem nenhum tipo de edição, pois se não fizesse esse set, possivelmente os campos iriam salvar vazios.
  useEffect(()=>{
    if(texto != null){
      setTitulo(texto.titulo);
      setDescricao(texto.descricao);  
    }
  }, [])

  return (
    <View>
      {/* Titulo do formulario passado como parametro, possivelmente Edição ou Adição */}
      <Text>{tituloForm}</Text>
      {/* Inputs contendo os valores dos estados e com a função de set no seu estado a cada alteração */}
      <InputFormulario label="Titulo" value={titulo} onChangeText={setTitulo}/>
      <InputFormulario label="Descrição" value={descricao} onChangeText={setDescricao}/>
      <BotaoSubmit onPress={onPressSalvar}/>
      <BotaoSubmit onPress={onPressCalcelar} textoBotao={"Cancelar"}/>
    </View>
  )
}

