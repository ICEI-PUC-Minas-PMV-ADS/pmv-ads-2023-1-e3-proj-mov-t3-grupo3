import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cardapio from "../pages/Cardapio";
import Item from "../pages/Item";
import Sobre from "../pages/Sobre";
import { UserProvider } from "../common/context/useUser";
import { ItemProvider } from "../common/context/useItem";
import Login from "../pages/Login";
import Sugestoes from "../pages/Sugestoes";


const Stack = createNativeStackNavigator();

export default function AppRoute() {
  return (
    //Providers e rotas de navegação em stack
    <UserProvider>
      <ItemProvider>
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
              <Stack.Screen name="Sugestoes" component={Sugestoes}/>
            </Stack.Navigator>
          </NavigationContainer>
      </ItemProvider>
    </UserProvider>
  );
}
