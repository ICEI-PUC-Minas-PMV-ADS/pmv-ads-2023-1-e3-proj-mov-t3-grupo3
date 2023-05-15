import { useNavigation } from "@react-navigation/native";
import {React, useState, useEffect} from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ItemCardapio from "./components/ItemCardapio";
import Topo from "./components/Topo";
import Footer from "./components/Footer";
import { useItem } from "../../common/context/useItem";
import { useIsFocused } from "@react-navigation/native";
import { carregaListaCategorias, carregaListaItens } from "../../services/item-service";

export default function Cardapio() {
  const navigation = useNavigation();
    //Controle do estado do formulario para adicionar uma nova informação
  const [ativaNovoItem, setAtivaNovoItem] = useState(true);
  //array contendo todos os itens e funções para controle de estado retornado pela API no contexto useItens
  const {listaFiltrada, setListaItens,  setListaFiltrada} = useItem()
  const isFocused = useIsFocused();

  function onPressButtonAdd() {
    setAtivaNovoItem(!ativaNovoItem);
  }

  //Função que ao carregar a pagina é chamada e faz com que o estado da lista de itens seja alterado
  useEffect(() => {
    carregaListaItens(setListaItens, setListaFiltrada)
  }, [isFocused]);

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


