import { useState, useContext, createContext } from "react";
import { Alert } from "react-native";
import { BASE_URL } from "../../services/urlApi";
import API from "../../services/webapi.services";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // mudar de null para ''
  const [signed, setSigned] = useState(false) // mudar de false para true

  return (
    <UserContext.Provider value={{ user, setUser, signed, setSigned }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user, setUser, signed, setSigned } = useContext(UserContext);
    const navigation = useNavigation()

  //a requisição de post na ulr/login na API json server auth, faz com que a API busque automatimaticamente o email e a senha dentro de um "objeto" que se chama users, caso os parametros passados "batam" com o de algum objeto no banco, ele ja retorna um token para aquele usuario, que sera salvado no local storage do dispositivo, além de atribuir o objeto encontrado ao user, e fazer um set no signed como true e por fim redireciona para a pagina principal
  const login = async ({email, password}) => {
    try{
      return await API.post(`${BASE_URL}/login`, {email, password}).then( 
        response => {
          const res = response.data
          setUser(res.user)
          AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
          setSigned(true)
          navigation.navigate("Home")

        }
      );
    }catch(error){
      console.log(error);
      if (error.response && error.response.status === 400) {
        alert("Usuario ou senha invalidos")
      };
    }
  }

  //Essa função faz o papel inverso do login, remove o token do localstorage, faz um set no signed como false e null no user e por fim redireciona para a pagina principal
  const logout = async () => {
    await AsyncStorage.removeItem("@TOKEN_KEY");
    setSigned(false);
    setUser(null);
    navigation.navigate("Home");
  };

  return { user, signed, login, logout };
};
