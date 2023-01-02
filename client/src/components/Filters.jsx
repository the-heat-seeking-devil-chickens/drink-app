function Filters({ select, selected }) {
  const handleChange = (e) => {
    select(e.currentTarget.value);
  };

  return (
    <>
      <ul className="filters">
        <li>
          <input
            id="all"
            type="radio"
            className="filter-btn"
            name="filter"
            value="all"
            checked={selected === 'all'}
            onChange={handleChange}
          ></input>
          <label htmlFor="all">All</label>
        </li>
        <li>
          <input
            id="whiskey"
            type="radio"
            className="filter-btn"
            name="filter"
            value="whiskey"
            checked={selected === 'whiskey'}
            onChange={handleChange}
          ></input>
          <label htmlFor="whiskey">Whiskey</label>
        </li>

        <li>
          <input
            id="vodka"
            type="radio"
            className="filter-btn"
            name="filter"
            value="vodka"
            checked={selected === 'vodka'}
            onChange={handleChange}
          ></input>
          <label htmlFor="vodka">Vodka</label>
        </li>

        <li>
          <input
            id="gin"
            type="radio"
            className="filter-btn"
            name="filter"
            value="gin"
            checked={selected === 'gin'}
            onChange={handleChange}
          ></input>
          <label htmlFor="gin">Gin</label>
        </li>

        <li>
          <input
            id="tequila"
            type="radio"
            className="filter-btn"
            name="filter"
            value="tequila"
            checked={selected === 'tequila'}
            onChange={handleChange}
          ></input>
          <label htmlFor="tequila">Tequila</label>
        </li>

        <li>
          <input
            id="rum"
            type="radio"
            className="filter-btn"
            name="filter"
            value="rum"
            checked={selected === 'rum'}
            onChange={handleChange}
          ></input>
          <label htmlFor="rum">Rum</label>
        </li>

        <li>
          <input
            id="aperol"
            type="radio"
            className="filter-btn"
            name="filter"
            value="aperol"
            checked={selected === 'aperol'}
            onChange={handleChange}
          ></input>
          <label htmlFor="aperol">Aperol</label>
        </li>

        <li>
          <input
            id="vermouth"
            type="radio"
            className="filter-btn"
            name="filter"
            value="vermouth"
            checked={selected === 'vermouth'}
            onChange={handleChange}
          ></input>
          <label htmlFor="vermouth">Vermouth</label>
        </li>
      </ul>
      <div className="button-container">
        <button className="primary-button" id="filter-submit" type="submit">
          Submit
        </button>
        <button className="primary-button" id="filter-clear" type="submit">
          Clear
        </button>
      </div>
    </>
  );
}

export default Filters;
