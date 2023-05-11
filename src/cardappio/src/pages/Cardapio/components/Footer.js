import React from 'react'
import { View } from 'react-native'
import BotaoAdd from '../../../components/BotaoAdd'
import FormularioAddEditItem from './FormularioAddEditItem'

export default function Footer({ ativaNovoItem, onPressButtonAdd }) {
  
    return (
    <View>
        {ativaNovoItem ? <BotaoAdd onPress={onPressButtonAdd}/> : <FormularioAddEditItem onPress={onPressButtonAdd} tituloForm={"Adicionar novo item"}/>}
    </View>
  )
}
