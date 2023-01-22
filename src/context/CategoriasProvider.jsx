import axios from "axios";
import { useEffect, useState, createContext } from "react";

const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  const getCategorias = async () => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const { data } = await axios(url);
      setCategorias(data.drinks);
    } catch (error) {}
  };

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {children}
    </CategoriasContext.Provider>
  );
};

export { CategoriasProvider };

export default CategoriasContext;
