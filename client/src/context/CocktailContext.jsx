import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CocktailContext = createContext();

export const CocktailProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [filteredCocktails, setFilteredCocktails] = useState(cocktails);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    getCocktails();
  }, []);

  useEffect(() => {
    filterCocktails();
  }, [cocktails, selectedFilter]);

  const filterCocktails = () => {
    if (selectedFilter !== 'all') {
      const newFilteredCocktails = cocktails.filter((cocktail) => {
        return cocktail['liquor'].includes(selectedFilter);
      });
      setFilteredCocktails(newFilteredCocktails);
    } else {
      setFilteredCocktails(cocktails);
    }
  };

  async function getCocktails() {
    const response = await axios.get('http://localhost:8080/');
    setCocktails(response.data);
  }

  return (
    <CocktailContext.Provider
      value={{
        cocktails,
        filteredCocktails,
        selectedFilter,
        setSelectedFilter,
        filterCocktails,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};

export default CocktailContext;
