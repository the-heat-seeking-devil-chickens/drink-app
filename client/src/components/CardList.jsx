import { useContext, useState } from 'react';
import Card from './Card';
import Filters from './Filters';
import MobileFilters from './MobileFilters';
import MobileHeader from './MobileHeader';
import CocktailContext from '../context/CocktailContext';
import React from 'react';
import Modal from './Modal';
import AddDrinkForm from './AddDrinkForm.jsx'
import AddDrinkFormTwo from './AddDrinkFormTwo.jsx';
function CardList() {
  const { filteredCocktails, selectedFilter, setSelectedFilter } =
    useContext(CocktailContext);
  const [showInputForm, setShowInputForm] = useState(false);


  return (
    <>
      <MobileHeader />
      <MobileFilters select={setSelectedFilter} selected={selectedFilter} />


      <header className="site-header pos-fixed vh-100 bg-light hide-mobile">
        <div className="container">

          <div className="logo">
            <img src="./src/assets/scratch-logo.png" alt="" />
          </div>

          <h2> Pick Your Poison: </h2>

          <Filters select={setSelectedFilter} selected={selectedFilter} />
        
          <div>
            <h2>Don't like what you see?</h2>
              <ul className="filters">
                <li>
                  <button name='filter' className="filter-btn" id="desktop-button" onClick = {() => setShowInputForm(true)}>Add Recipe</button>
                </li>
              </ul>
            </div>
          {/* end of container div */}
          </div>

      </header>
      
      {showInputForm ? (
        <Modal className="modal-active">
          <div className="card-box">
            <div className="card-info">
              <button className="hideModal" onClick={() => setShowInputForm(false)}>
                X
              </button>
              {/* <AddDrinkForm selected={selectedFilter}></AddDrinkForm> */}
              <AddDrinkFormTwo selected={selectedFilter}></AddDrinkFormTwo>
            </div>
          </div>
        </Modal>
      ) : null}


      <section className="card-list display-flex flex-dir-row flex-wrap flex-justify-evenly">
        {filteredCocktails.map((cocktail, i) => (
          <Card key={i} cocktail={cocktail} />
        ))}
      </section>
    </>
  );
}

export default CardList;
