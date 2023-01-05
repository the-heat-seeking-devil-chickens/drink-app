import React from "react";
//renders the filters, allows the user to filter the drinks

function MobileFilters({ selected, select }) {
  const categories = [
    'all',
    'whiskey',
    'gin',
    'tequila',
    'vodka',
    'rum',
    'aperol',
    'vermouth',
  ];

  const handleSelectChange = (e) => {
    select(e.target.value);
  };

  return (
    <div className="select-container hide-desktop mobile-sticky">
      <label htmlFor="mobile-filters">
        <span>Pick Your Poison:</span>
        <select
          id="filter-select"
          value={selected}
          onChange={handleSelectChange}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toLocaleUpperCase()}
            </option>
          ))}
        </select>
      </label>
      <br/>
      <div>
            <h2>Don't like what you see?</h2>
              <ul className="filters">
                <li>
                  <button name='filter' className="filter-btn" id="mobile-button">Add Recipe</button>
                </li>
              </ul>
            </div>
    </div>
  );
}

export default MobileFilters;
