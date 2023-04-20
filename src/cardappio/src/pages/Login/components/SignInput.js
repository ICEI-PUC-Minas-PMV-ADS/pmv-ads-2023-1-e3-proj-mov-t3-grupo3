import React from "react";
import styled from "styled-components";
import { TextInput, View } from "react-native";

//estilização do campos para digitar
const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #eaeaea;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

//estilização do texto digitado nos campos
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #268596;
    margin-left: 10px;
`;


//retorno do prop
export default ({placeholder, password, onChangeText}) => {
    return (
        <InputArea>
            <Input
                placeholder={placeholder}
                placeholderTextColor="#c3c1c1" 
                secureTextEntry={password}
                onChangeText={onChangeText}
                autoCapitalize="none"
            />
        </InputArea>
    );
}

