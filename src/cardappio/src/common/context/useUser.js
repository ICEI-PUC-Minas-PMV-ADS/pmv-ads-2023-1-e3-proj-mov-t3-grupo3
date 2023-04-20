import { useState, useContext, createContext } from "react";
import { Alert } from "react-native";
import { BASE_URL } from "../../services/urlApi";
import API from "../../services/webapi.services";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(''); // mudar de null para ''
  const [signed, setSigned] = useState(true) // mudar de false para true

  return (
    <UserContext.Provider value={{ user, setUser, signed, setSigned }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user, setUser, signed, setSigned } = useContext(UserContext);
    const navigation = useNavigation()

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

  const logout = async () => {
    await AsyncStorage.removeItem("@TOKEN_KEY");
    setSigned(false);
    setUser(null);
    navigation.navigate("Home");
  };

  return { user, signed, login, logout };
};
