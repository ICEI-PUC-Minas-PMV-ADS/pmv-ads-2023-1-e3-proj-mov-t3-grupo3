import React, { useState } from "react";
import { Image, StyleSheet,View } from "react-native";
import Logo from "../../../assets/cardappio-logo.png";
import {InputArea,BotaoLogin,BotaoLoginText} from './styles';
import SignInput from "./components/SignInput";
import { useUser } from "../../common/context/useUser";
import BotaoVoltar from "../../components/BotaoVoltar";

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const {login} = useUser()

    return (
        <>
        <BotaoVoltar/>
                <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.cardappioLogoImg} source={Logo}/>
            </View>

            {/* Campos para digitar login e e-mail, senha e botão "Login" */}
            <InputArea>
                <SignInput
                    placeholder="Digite o seu e-mail"
                    onChangeText={setEmail}                
                />

                <SignInput 
                    placeholder="Digite a sua senha"
                    password={true}
                    onChangeText={setPassword}                
                />

                <BotaoLogin onPress={()=> login({email, password})}>
                    <BotaoLoginText>Login</BotaoLoginText>
                </BotaoLogin>
            </InputArea>
        </View>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        paddingTop: 50,
        alignItems: "center",
    },

    //Logo
    cardappioLogoImg: {
        marginTop: 150,
        borderRadius: 10,
        width: 200,
        height: 200,
    },
});