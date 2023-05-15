import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CardSobre from "./components/CardSobre";
import BotaoVoltarCardapio from "../../components/BotaoVoltarCardapio";
import Logo from "../../../assets/cardappio-logo.png";
import Icon from "@expo/vector-icons/MaterialIcons";
import BotaoAdd from "../../components/BotaoAdd";
import FormularioAddEditInfo from "./components/FormularioAddEditInfo";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../../common/context/useUser";
import { logout } from "../../services/user-service";
import { useIsFocused } from "@react-navigation/native";
import {carregaTextosInfo} from '../../services/textosSobre-service'

export default function Sobre() {
  //Estado contendo todos os textos retornados pela API no contexto useTextoInfo
  //Controle do estado do formulario para adicionar uma nova informação
  const [ativaNovaInfo, setAtivaNovaInfo] = useState(false);
  //Estado de login e função para realizar logout retornados pelo contexto useUser
  const { signed, setSigned, setUser } = useUser();
  const navigation = useNavigation();
  //Controle de estado dos textos sobre o estabelecimento
  const [textosInfo, setTextoInfos] = useState([]);

  //Função para alterar o estado do formulario de adicionar uma nova informação
  function onPressButtonAdd() {
    setAtivaNovaInfo(!ativaNovaInfo);
  }

  const isFocused = useIsFocused();

  // Função que ao carregar a pagina é chamada e faz com que o estado dos textos seja alterado
  useEffect(() => {
    carregaTextosInfo(setTextoInfos)
  }, [isFocused]);


  return (
    <ScrollView style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.aboutText}>Sobre o Restaurante</Text>
        <Image style={styles.cardappioLogoImg} source={Logo} />
        <Text style={styles.nomeText}>Cardappio</Text>
      </View>

      <View style={styles.avalicao}>
        <Text style={styles.avaliacaoText}>Avaliação dos Clientes:</Text>
      </View>
    {/* Faz com que seja seja renderizado um componente CardSobre para cada texto retornado do array TextosInfo */}
      {textosInfo.map((texto) => (
        //Passado como parametro o texto de cada posição para cada componente renderizado, alem de atribuir uma key, ja que é uma lista
        <CardSobre key={texto.id} texto={texto} textosInfo={textosInfo} setTextoInfos={setTextoInfos}/>
      ))}

      {/* Caso o estado do formulario seja false, sera mostrado o botão de adicionar e caso seja true, o botão é esondido e é exibido um formulario de inserção de uma nova informação */}
      {!ativaNovaInfo && <BotaoAdd onPress={onPressButtonAdd} />}
      {ativaNovaInfo && <FormularioAddEditInfo tituloForm={"Inserir nova informação"} onPress={onPressButtonAdd} textosInfo={textosInfo} setTextoInfos={setTextoInfos}/>}

      <BotaoVoltarCardapio />

      <View style={styles.boxAvaliacao}>
        <Text style={styles.tituloBoxAvaliacao}>
          Faça sua avaliação e deixe uma sugestão...
        </Text>
      </View>
      {/* Caso o estado signed seja false ele tera a opção de fazer login e caso seja true ele ira mostrar o logout */}
      {!signed ? (
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttonLoginText}>
            Faça login para editar o cardápio
          </Text>
          <Icon name="login" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            logout(setSigned, setUser, navigation);
          }}
        >
          <Text style={styles.buttonLoginText}>Logout</Text>
          <Icon name="logout" />
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  header: {
    paddingTop: 50,
    alignItems: "center",
  },

  //texto Sobre o Restaurante
  aboutText: {
    color: "#f04c54",
    fontSize: 16,
    fontWeight: "900",
    paddingBottom: 10,
  },

  //Logo
  cardappioLogoImg: {
    borderRadius: 10,
    width: 120,
    height: 120,
  },

  //texto Cardappio
  nomeText: {
    color: "#f04c54",
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 10,
    marginBottom: 20,
  },

  //texto Avaliação dos Clientes
  avalicao: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginLeft: 30,
  },

  avaliacaoText: {
    color: "#f04c54",
    fontSize: 16,
    fontWeight: "bold",
  },

  //card de avaliação
  boxAvaliacao: {
    borderWidth: 2,
    borderColor: "#f04c54",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },

  tituloBoxAvaliacao: {
    color: "#f04c54",
    fontSize: 16,
  },

  //botão final e login
  buttonLogin: {
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },

  buttonLoginText: {
    color: "#f04c54",
    fontSize: 16,
  },
});
