import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import Filters from './Filters';
import CocktailContext from '../context/CocktailContext';

function CardList() {
  const { filteredCocktails, selectedFilter, setSelectedFilter } =
    useContext(CocktailContext);

  return (
    <>
      <header className="site-header pos-fixed vh-100 bg-light">
        <div className="container">
          <div className="logo">
            <img src="./src/assets/scratch-logo.png" alt="" />
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
