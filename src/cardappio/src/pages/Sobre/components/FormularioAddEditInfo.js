import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import InputFormulario from '../../../components/InputFormulario'
import BotaoSubmit from '../../../components/BotaoSubmit'
import {addInfo, updateInfo} from "../../../services/textosSobre-service"  

//O componente recebe como prop, um titulo, uma função e um objeto (texto), que caso não seja passado tem como padrão o valor null
export default function FormularioAddEditInfo({tituloForm, onPress, texto = null, textosInfo, setTextoInfos}) {
  //Controle do estado dos inputs
  const [titulo, setTitulo] = useState(texto?.titulo || "");
  const [descricao, setDescricao] = useState(texto?.descricao || "");


  //Caso seja passado um objeto na prop texto, indica que esta se tratando de uma edição de uma informação, caindo na primeira condição e caso não seja passado nada ou seja o texto seja null, caira na segunda condição
  function onPressSalvar(){
    if(texto !=null){
      const id = texto.id
      updateInfo({id, titulo, descricao}, textosInfo, setTextoInfos)
      onPress();
    }else{
      addInfo({titulo, descricao}, textosInfo, setTextoInfos)
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


  return (
    <>
    <View style={styles.alteracao}>
      {/* Titulo do formulario passado como parametro, possivelmente Edição ou Adição */}
      <Text style={styles.tituloEditar}>{tituloForm}</Text>
      {/* Inputs contendo os valores dos estados e com a função de set no seu estado a cada alteração */}
      <InputFormulario label="Título:" value={titulo} onChangeText={setTitulo}/>
      <InputFormulario label="Descrição:" value={descricao} onChangeText={setDescricao}/>  
    </View>
      <BotaoSubmit onPress={onPressSalvar}/>
      <BotaoSubmit onPress={onPressCalcelar} textoBotao={"Cancelar"}/>
    </>
  );
}

const styles = StyleSheet.create({

  alteracao: {
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    width:"90%"
  },

  tituloEditar: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  tituloAlteracao: {
    fontSize: 20,
    color: "#fff",
    //backgroundColor: "#000",
  },

});
