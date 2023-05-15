import React from 'react'
import { View } from 'react-native'
import BotaoAdd from '../../../components/BotaoAdd'
import FormularioAddEditItem from './FormularioAddEditItem'

export default function Footer({ ativaNovoItem, onPressButtonAdd }) {
  
    return (
    //Caso a propriedade ativaNovoIten seja true, o footer passa a ser o botao de adicionar um novo item, caso contrario ele ira mostrar o formulario para adicionar um novo item
    <View>
        {ativaNovoItem ? <BotaoAdd onPress={onPressButtonAdd}/> : <FormularioAddEditItem onPress={onPressButtonAdd} tituloForm={"Adicionar novo item"}/>}
    </View>
  )
}
