import { useNavigation } from "@react-navigation/native";
import {React, useContext} from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ItemCardapio from "./components/ItemCardapio";
import Topo from "./components/Topo";
import BotaoAdd from "../../components/BotaoAdd"
import {useItens} from "../../common/context/useItens"

export default function Cardapio() {
  const { listaItens }  = useItens()
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <FlatList
        data={listaItens}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ItemCardapio
            {...item}
            aoPressionar={() => {
              navigation.navigate("Item", item);
            }}
          />
        )}
        ListHeaderComponent={Topo}
        ListFooterComponent={BotaoAdd}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
