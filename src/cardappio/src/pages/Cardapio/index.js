import { useNavigation } from "@react-navigation/native";
import {React, useContext} from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ItemCardapio from "./components/ItemCardapio";
import Topo from "./components/Topo";
import BotaoAdd from "../../components/BotaoAdd"
import {useItens} from "../../common/context/useItens"

export default function Cardapio() {
  //array contendo todos os itens retornado pela API no contexto useItens
  const { listaItens }  = useItens()
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      {/* percorre todo o array listaItens porem de forma mais otimizado com o flatlist e não com o map, tendo como cabeçalho o componente topo e rodape o componente de botao feito para adicionar itens */}
      <FlatList
        data={listaItens}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ItemCardapio
            {...item}
            aoPressionar={() => {
              navigation.navigate("Item", item); //Talvez eu coloque esse navigate no componente ItemCardapio
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
