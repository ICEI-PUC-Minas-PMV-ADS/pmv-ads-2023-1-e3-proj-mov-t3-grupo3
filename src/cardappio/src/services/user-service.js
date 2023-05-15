//Arquivo se serviços do usuario

import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth/react-native";


export const login = async ({ email, password}, setSigned, setUser, navigation ) => {

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userRetornado = userCredential.user;

    if (userRetornado && userRetornado.accessToken) {
      AsyncStorage.setItem("@TOKEN_KEY", userRetornado.accessToken).then();
      setSigned(true);
      navigation.navigate("Home");
      setUser(user);
      return userRetornado;
    }
  } catch (error) {
    console.log(error);
    if (
      error.code === "auth/wrong-password" ||
      error.code === "auth/user-not-found" ||
      error.code === "auth/invalid-email"
    ) {
      alert("Usuário ou senha inválidos");
    }
  }
};

export const logout = async (setSigned, setUser, navigation) => {

  await AsyncStorage.removeItem("@TOKEN_KEY");
  setSigned(false);
  setUser(null);
  navigation.navigate("Home");
};
