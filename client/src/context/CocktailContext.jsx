import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//CocktailContext is our context object
const CocktailContext = createContext();

export const CocktailProvider = ({ children }) => {
  // coctails is an array - set initially to empty array by the useState hook
  //setCocktails is a function that we can use to update state
    //ie. setCoctails(["Old Fashioned", "Gin Gimlet", "Tom Collins"]) --> This would set the cocktails state to be equal to that array of cocktails
  const [cocktails, setCocktails] = useState([]);
  const [filteredCocktails, setFilteredCocktails] = useState(cocktails);
  const [selectedFilter, setSelectedFilter] = useState('all');

  //useEffect is simmilar to componenetDidMount and componenetDidUpdate. --> this function will run whenever the componenet is mounted to dom, or updated
  //in this case - the empty array as the second argument dictates that this hook only runs when componenet is mounted to the dom
  useEffect(() => {
    getCocktails();
  }, []);

  //since we are passing in an array with cocktails and selected filter as arguments, 
  //this hook is set to listen to changes in the cocktails array and the selectedFilter array. It will run whenever these pieces of state change
  useEffect(() => {
    filterCocktails();
  }, [cocktails, selectedFilter]);

  const filterCocktails = () => {
    if (selectedFilter !== 'all') {
      //newFilteredCocktails is a new array where each cocktail included has a liquor property that includes to the selected filter. 
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

  //cocktail context.provider creates an object that has values which children will inherit
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
