import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cardapio from "../pages/Cardapio";
import Item from "../pages/Item";
import Sobre from "../pages/Sobre";
import { UserProvider } from "../common/context/useUser";
import { ItemProvider } from "../common/context/useItem";
import { TextoInfoProvider } from "../common/context/useTextoInfo";
import Login from "../pages/Login";


const Stack = createNativeStackNavigator();

export default function AppRoute() {
  return (
    //Providers e rotas de navegação em stack
    <UserProvider>
      <ItemProvider>
        <TextoInfoProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Home" component={Cardapio} />
              <Stack.Screen name="Item" component={Item} />
              <Stack.Screen name="Sobre" component={Sobre} />
              <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
          </NavigationContainer>
        </TextoInfoProvider>
      </ItemProvider>
    </UserProvider>
  );
}
