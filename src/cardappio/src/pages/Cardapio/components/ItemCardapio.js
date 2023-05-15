import { React, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import { useUser } from "../../../common/context/useUser";
import FormularioAddEditItem from "./FormularioAddEditItem";
import { deleteItem } from "../../../services/item-service";
import { useItem } from "../../../common/context/useItem";

export default function ItemCardapio({ item, aoPressionar }) {
  const { signed } = useUser();
  const [ativaEditar, setAtivaEditar] = useState(false);
  const {listaItens, setListaItens, setListaFiltrada} = useItem()
  function onPreesButtonEditar() {
    setAtivaEditar(!ativaEditar);
  }

  return (
    //Cada card em forma de "botao" com redirecionamento para sua pagina, "acionando" a função que foi passada como parametro na chamada do componente
    <View>
      {/* Caso o estado ativaEditar seja  false, ele ira exibir o item normalmente*/}
      {!ativaEditar && (
        <>
          <TouchableOpacity style={styles.card} onPress={aoPressionar}>
            <View style={styles.cardInfo}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.copy}>{item.copy}</Text>
              <Text style={styles.preco}>R${item.valor}</Text>
            </View>
            <View>
              <Image style={styles.imagem} source={{ uri: item.url_img }} />
            </View>
          </TouchableOpacity>
          <View style={styles.positionicons}>
            {signed && (
              <TouchableOpacity onPress={onPreesButtonEditar}>
                <Icon name="edit" size={20} />
              </TouchableOpacity>
            )}
            {signed && (
              <TouchableOpacity
                onPress={() => {
                  const id = item.id
                  deleteItem({id}, listaItens, setListaItens, setListaFiltrada);
                }}
              >
                <Icon name="highlight-remove" size={20} />
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
      {/* Caso o estado ativaEditar seja true, ele ira exibir um formulario de edição do item ja carregando as suas informações*/}
      {ativaEditar && (
        <FormularioAddEditItem
          tituloForm={"Editar"}
          onPress={onPreesButtonEditar}
          item={item}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "#EF4F51",
    margin: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  positionicons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 8,
    backgroundColor: "#05a5d8",
  },
  cardInfo: {
    width: "70%",
  },
  imagem: {
    width: 75,
    height: 75,
  },
  nome: {
    color: "#FEB342",
    fontWeight: "bold",
  },
  copy: {
    color: "#ffff",
    paddingVertical: 10,
  },
  preco: {
    color: "#ffff",
    fontWeight: "bold",
  },
});
