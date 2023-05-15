// contexto para controle de estado dos usuarios

import { useState, useContext, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(''); 
  const [signed, setSigned] = useState(true) 

  return (
    <UserContext.Provider value={{ user, setUser, signed, setSigned }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext)
  const { user, setUser, signed, setSigned, navigation } = context;

  
  return { user, signed, setUser, setSigned, navigation };
};
