import { createContext, useState } from "react";

const Context = createContext({
  favorites: [],
  setFavorites: () => {},
});

export const ContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <Context.Provider value={{ favorites, setFavorites }}>
      {children}
    </Context.Provider>
  );
};

export default Context;