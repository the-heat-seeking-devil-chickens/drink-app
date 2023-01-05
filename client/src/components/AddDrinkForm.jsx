import { useContext, useState } from 'react';

const AddDrinkForm = () => {
  const [cocktailName, updateCocktailName] = useState('');
  const [liquors, updateLiquors] = useState([]);
  const [ingredients, updateIngredients] = useState([]);

  const addLiquor = (liquor) =>{
    updateLiquors([...liquors, liquor])
  }
  const liquorsElements = [];

  liquors.forEach((liquor, index) => {
    liquorsElements.push(
      <li key={index} className='liquor'>{liquor}</li>
    )
  })

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
  
  return(
    <>
      {/* name is a string */}
      <label htmlFor='name'>Name of your cocktail:</label>
      <input type='text' name='name' id='name'></input>
      <button style={{display: 'block'}} onClick = {() => updateCocktailName(document.getElementById('name').value)}>Submit Name</button>
     
      <br/>
      
      {/* liquor is an array of strings  */}
  
      <label htmlFor='liquor'>Liquor type :</label>
      <select
          id="liquor"
          // value={selected}
          // onChange={handleSelectChange}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toLocaleUpperCase()}
            </option>
          ))}
        </select>
      <button style={{display: 'block'}} onClick = {() => addLiquor(document.getElementById('liquor').value)}>Submit Liquor</button>
      <br/>

      {/* ingredients is an array of array of strings. example: */}
      {/*ingredients: [ ['lime cordial', '50ml'], ['gin', '50ml'] ]*/}
      <label htmlFor='ingredients'>Ingredient name :</label>
      <input type='text' name='ingredient Items'></input>
      <label htmlFor='ingredients'> Amount {'(ml)'}:</label>
      <input type='text' name='ingredient Amount'></input>
      <button style={{display: 'block'}}>Submit both ingredient name and amount</button>
      
      <br></br>
      
      <br/>

      {/*Garnish is an array of strings i.e.: garnish: ['lime', 'edible flower'] */}
      <label htmlFor='garnish'>Garnish :</label>
    <input type='text' name='garnish' ></input>
    <br/>
    
    {/*Directions is a string with special formatting i.e.
    'STEP 1 .... STEP 2......
    */}
     <label htmlFor='liquor'>Directions :</label>
    <input type='text' name='directions'></input>
    <br/>

    <input type='submit' className='filter-btn' value='Add my recipe!'></input>
    <br/>

    <div id='newDrinkState'>
      <p>Your cocktails name: </p>
      <h2>{cocktailName}</h2>
      <p>Your cocktails ingredients:</p>
      <p>{liquorsElements}</p>

    </div>
  </>
  )
};

export default AddDrinkForm;