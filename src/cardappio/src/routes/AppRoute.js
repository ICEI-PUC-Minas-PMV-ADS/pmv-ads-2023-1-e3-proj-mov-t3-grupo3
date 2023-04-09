import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cardapio from "../pages/Cardapio";
import Item from "../pages/Item"
const Stack = createNativeStackNavigator();

export default function AppRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Home" component={Cardapio} />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
