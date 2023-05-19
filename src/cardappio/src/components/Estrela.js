import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import estrela from '../../assets/estrela.png'
import estrelaCinza from '../../assets/estrelaCinza.png'


export default function Estrela({ onPress, desabilitada = true, preenchida}) {
    
    const getImagem = () => {
        if (preenchida){
            return estrela
        }
        return estrelaCinza
    }

    return (
    <TouchableOpacity 
    onPress={onPress}
    disabled={desabilitada}
    >
        <Image source={getImagem()} style={styles.estrela}/>
    </TouchableOpacity>  )
}


const styles = StyleSheet.create({
    estrela: {
        width: 25,
        height: 25,
        marginRight: 2
    },
})

