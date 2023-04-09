import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { urlApi } from "../../services/urlApi";
import ItemCardapio from "./components/ItemCardapio";
import Topo from "./components/Topo";

export default function Cardapio() {
  const [itens, setItens] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setItens(data.itens_do_cardapio))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={itens}
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
