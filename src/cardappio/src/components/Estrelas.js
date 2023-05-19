import React, { useEffect, useState } from 'react'
import {  StyleSheet,  View } from 'react-native'
import Estrela from './Estrela';


export default function Estrelas({quantidade: quantidadeAntiga, editavel = false, onPressStar = null}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga)

    useEffect(() => {
        if(onPressStar != null){
            onPressStar(quantidade)
        }
    },[quantidade])
    
    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let i = 0; i < 5; i++){
            listaEstrelas.push(
                <Estrela 
                    key={i}
                    onPress={() => 
                        setQuantidade(i+1)
                    }
                    desabilitada = {!editavel}
                    preenchida = {i < quantidade}
                />
            );
        }
        return listaEstrelas;
    }

    return (
        <View style={styles.estrelas}>
            <RenderEstrelas/>
        </View>
  )
}



const styles = StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
    },
})