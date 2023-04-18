import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cardapio from "../pages/Cardapio";
import Item from "../pages/Item"
import Sobre from "../pages/Sobre";
import { ItemProvider } from "../common/context/useItens";
import { TextoInfoProvider} from "../common/context/useTextoInfo"
const Stack = createNativeStackNavigator();

export default function AppRoute() {
  return (
  <ItemProvider>
    <TextoInfoProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({
            headerShown: false,
          })}
        >
          <Stack.Screen name="Home" component={Cardapio} />
          <Stack.Screen name="Item" component={Item} />
          <Stack.Screen name="Sobre" component={Sobre}/>
        </Stack.Navigator>
      </NavigationContainer>
    </TextoInfoProvider>
  </ItemProvider>
  );
}
