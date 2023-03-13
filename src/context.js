import { createContext } from "react";

const Context = createContext({
  favorites: [],
  setFavorites: () => {},
});

export default Context;