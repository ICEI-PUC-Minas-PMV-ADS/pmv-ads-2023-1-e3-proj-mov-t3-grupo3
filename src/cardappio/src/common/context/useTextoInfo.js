import { useState, useContext, createContext, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";

export const TextoInfoContext = createContext();

export const TextoInfoProvider = ({ children }) => {
  const [textosInfo, setTextoInfos] = useState([]);

  return (
    <TextoInfoContext.Provider value={{ textosInfo, setTextoInfos }}>
      {children}
    </TextoInfoContext.Provider>
  );
};

export const useTextoInfo = () => {
  const context = useContext(TextoInfoContext);
  const { textosInfo, setTextoInfos } = context;

  const isFocused = useIsFocused();

  //Faz uma requisição na API e pega todos as informações cadastrados e insere na variavel textosInfo através do setTextoInfos
  useEffect(() => {
    const textoInfosRef = collection(db, "textos_sobre");
    getDocs(textoInfosRef)
      .then((querySnapshot) => {
        const textoInfos = [];
        querySnapshot.forEach((doc) => {
          textoInfos.push({ id: doc.id, ...doc.data() });
        });
        setTextoInfos(textoInfos);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [isFocused]);

  //Recebe parametros e atribui a um objeto,assim fazendo uma requisição na API e insere o novo dado no banco e no textosInfo
  return { textosInfo, setTextoInfos };
};
