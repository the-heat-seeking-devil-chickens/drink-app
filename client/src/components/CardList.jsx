import { useContext } from 'react';
import Card from './Card';
import Filters from './Filters';
import MobileFilters from './MobileFilters';
import MobileHeader from './MobileHeader';
import CocktailContext from '../context/CocktailContext';

function CardList() {
  const { filteredCocktails, selectedFilter, setSelectedFilter } =
    useContext(CocktailContext);

  return (
    <>
      <MobileHeader />
      <MobileFilters select={setSelectedFilter} selected={selectedFilter} />


      <header className="site-header pos-fixed vh-100 bg-light hide-mobile">
        <div className="container">
          <div className="logo">
            <img src="./src/assets/scratch-logo.png" alt="" />
          </div>
          <div>
            <h2>Add a Recipe!</h2>
            
          </div>
          <h2> Pick Your Poison: </h2>
          <Filters select={setSelectedFilter} selected={selectedFilter} />
        </div>
      </header>
      <section className="card-list display-flex flex-dir-row flex-wrap flex-justify-evenly">
        {filteredCocktails.map((cocktail, i) => (
          <Card key={i} cocktail={cocktail} />
        ))}
      </section>
    </>
  );
}

export default CardList;
