import { useNavigation } from "@react-navigation/native";
import {React, useState} from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ItemCardapio from "./components/ItemCardapio";
import Topo from "./components/Topo";
import Footer from "./components/Footer";
import { useItem } from "../../common/context/useItem";

export default function Cardapio() {
  //array contendo todos os itens retornado pela API no contexto useItens
  const navigation = useNavigation();
    //Controle do estado do formulario para adicionar uma nova informação
  const [ativaNovoItem, setAtivaNovoItem] = useState(true);
  const {listaFiltrada} = useItem()

  function onPressButtonAdd() {
    setAtivaNovoItem(!ativaNovoItem);
  }

  return (
    <View style={styles.page}>
      {/* percorre todo o array listaFiltrada porem de forma mais otimizado com o flatlist e não com o map, tendo como cabeçalho o componente topo e rodape o componente de botao feito para adicionar itens */}
      <FlatList
        data={listaFiltrada}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ItemCardapio
            item={item}
            
            aoPressionar={() => {
              navigation.navigate("Item", item); //Talvez eu coloque esse navigate no componente ItemCardapio
            }}
          />
        )}
        ListHeaderComponent={Topo}
        ListFooterComponent={<Footer ativaNovoItem={ativaNovoItem} onPressButtonAdd={onPressButtonAdd} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});


