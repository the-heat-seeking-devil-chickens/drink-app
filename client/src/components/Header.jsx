import { useState, useContext } from 'react';
import CocktailContext from '../context/CocktailContext';

function Header() {
  const { select, setSelected } = useState('all');

  const categories = [
    'whiskey',
    'gin',
    'vodka',
    'rum',
    'tequila',
    'aperol',
    'vermouth',
  ];

  const handleChange = (e) => {
    setSelected(e.currentTarget.value);
    console.log(filters);
  };

  return (
    <header className="site-header pos-fixed vh-100 bg-light">
      <div className="container">
        <div className="logo">
          <img src="./src/assets/scratch-logo.png" alt="" />
        </div>
        <h2> Pick Your Poison: </h2>
        <ul className="filters">
          {categories.map((cat) => (
            <li key={cat}>
              <input
                className="filter-btn"
                onChange={handleChange}
                checked={setSelected === cat}
                type="radio"
                value={cat}
              />
              <label htmlFor={cat}>{cat.toLocaleUpperCase()}</label>
            </li>
          ))}
        </ul>

        <div className="button-container">
          <button className="primary-button" id="filter-submit" type="submit">
            Submit
          </button>
          <button className="primary-button" id="filter-clear" type="submit">
            Clear
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
