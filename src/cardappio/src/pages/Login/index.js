import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import CardappioLogo from "../../assets/logoCardappio.png";
import {InputArea,BotaoLogin,BotaoLoginText} from './styles';
import SignInput from "../../components/SignInput";


export const Login  = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.cardappioLogoImg} source={CardappioLogo}/>
            </View>

            {/* Campos para digitar login e e-mail, senha e botão "Login" */}
            <InputArea>
                <SignInput
                    placeholder="Digite o seu e-mail"
                />

                <SignInput 
                    placeholder="Digite a sua senha"
                    password={true}
                />

                <BotaoLogin>
                    <BotaoLoginText>Login</BotaoLoginText>
                </BotaoLogin>
            </InputArea>
        </View>
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