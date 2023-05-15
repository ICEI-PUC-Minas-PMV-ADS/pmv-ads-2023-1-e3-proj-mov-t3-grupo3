import { useState, useEffect } from "react";
import Categoria from "./Categoria";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { filtrarOpcao } from "../../../../../services/item-service";
import { useItem } from "../../../../../common/context/useItem";
import BotaoAdd from "../../../../../components/BotaoAdd";
import { useUser } from "../../../../../common/context/useUser";
import FormularioAddEditCategoria from "./FormularioAddEditCategoria";
import Carousel from "react-native-snap-carousel";
import { carregaListaCategorias } from "../../../../../services/item-service";

export default function Categorias() {
  //listas e funções passadas pelo contexto do item para controle de estado
  const { setListaFiltrada, listaItens, listaCategorias, setListaCategorias } =
    useItem();

  //Estado que controla se o usuario esta ou não logado passado pelo contexto de usuario
  const { signed } = useUser();
  //Controle de estado para visualização do formuario para inserir ou editar uma categoria
  const [ativaNovaCategoria, setAtivaNovaCategoria] = useState(false);
  const [ativaEditar, setAtivaEditar] = useState(false)
  
  //Controle de estado do slider
  const [sliderRef, setSliderRef] = useState(null);
  
  //Controle de estado para que ele so mostre as categorias caso elas tenha sido realmente carregadas (Foi feito para uma correção de bug)
  const [loaded, setLoaded] = useState(false);
  
  //Controle de estado da categoria escolhida para a edição
  const [categoria, setCategoria] = useState([])

  //Função para controle de estado da visualização do formualrio para inserir ou editar nova categoria
  function onPressButtonAdd() {    
    if(ativaEditar === true){
      setAtivaNovaCategoria(false)
      setAtivaEditar(false)
      setCategoria(null);
    }else{
      setAtivaNovaCategoria(!ativaNovaCategoria);
    }
  }

  //A pagina ser carregada ele carrega todas as categorias
  useEffect(() => {
    carregaListaCategorias(setListaCategorias).then(() => setLoaded(true)); // atualiza loaded após o carregamento das categorias
  }, []);

  //Chamada da função de filtro
  function onPressFiltro(id) {
    filtrarOpcao(id, setListaFiltrada, listaItens, listaCategorias);
  }


  //Componente do carousel, caso o usuario esteja logado ele exibe a categoria com a função de editar ao clicar sobre e caso não esteja logado ele chama a função de clicque na categoria para filtrar
  function renderItem({ item }) {
    if(signed){
      return <Categoria key={item.id} categoria={item} ativaEditar={ativaEditar} setAtivaEditar={setAtivaEditar} setCategoria={setCategoria}/>;
    }else{
      return <Categoria key={item.id} categoria={item} onPress={onPressFiltro} />;
    }
  }

  return (
    <>
    {/* apenas se loaded for true ele ira exibir o carousel */}
      {loaded &&<View style={styles.carouselContainer}>
        <TouchableOpacity
          style={[
            {
              left: 0,
              fontWeight:
                sliderRef &&
                sliderRef.currentIndex === listaCategorias.length - 1
                  ? "normal"
                  : "bold",
            },
          ]}
          onPress={() => sliderRef?.snapToPrev()}
        >
          <Text style={styles.navButtonText}>{"<"}</Text>
        </TouchableOpacity>
          <Carousel
            data={listaCategorias}
            renderItem={renderItem}
            sliderWidth={200}
            itemWidth={80}
            slideStyle={[styles.slide]}
            ref={(ref) => setSliderRef(ref)}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            activeSlideAlignment={"start"}
            loop={true}
          />
        <TouchableOpacity
          style={[
            {
              right: 0,
              fontWeight:
                sliderRef && sliderRef.currentIndex === 0 ? "normal" : "bold",
            },
          ]}
          onPress={() => {
            sliderRef?.snapToNext();
          }}
        >
          <Text style={styles.navButtonText}>{">"}</Text>
        </TouchableOpacity>
      </View>}
      {/* Caso o usuario esteja logado (signed = true) e ativaNovaCategoria e ativaEditar forem false ira exbir um botao para adicionar*/}
      {signed && !ativaNovaCategoria && !ativaEditar && (
        <View>
          <BotaoAdd categoria={true} onPress={onPressButtonAdd} />
        </View>
      )}
      
      {/* Caso o usuario esteja logado (signed = true), ativaNovaCategoria for true e ativaEditar for false ira exbir um formulario para adicionar um novo item*/}
      {signed && ativaNovaCategoria && !ativaEditar &&(
        <FormularioAddEditCategoria onPress={onPressButtonAdd} />
      )}
      
      {/* Caso o usuario esteja logado (signed = true), ativaEditar for true e ativaNovaCategoria  for false ira exbir um formulario para adicionar um novo item*/}
      {signed && ativaEditar && !ativaNovaCategoria && (
        <FormularioAddEditCategoria onPress={onPressButtonAdd} categoria={categoria}/>
      )}

    </>
  );
}
const styles = StyleSheet.create({
  addOpcoes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    flex: 1,
    alignItems: "center",
  },
  navButtonText: {
    color: "#f04c54",
    fontSize: 22,
    fontWeight: "bold",
  },
  carouselContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    overflow: "hidden",
    justifyContent: "center",
  },
});
