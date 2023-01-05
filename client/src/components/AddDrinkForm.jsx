import { useContext, useState } from 'react';
import axios from 'axios';

const AddDrinkForm = () => {
  const [cocktailName, updateCocktailName] = useState('N/A');
  const [liquors, updateLiquors] = useState([]);
  const [ingredients, updateIngredients] = useState([]);
  const [garnishes, updateGarnishes] = useState([]);
  const [directions, updateDirections] = useState([]);

  const postToDB = () => {
    let garnishString ='Garnish:';
    //do some logic to convert our garnishes array to a string. 
    if(garnishes.length === 0) garnishString += ' none';
    else{
      //iterate over every garnish in our garnish array.
      garnishes.forEach(garnish => {
      //add each one to the garnish string
        garnishString += ` ${garnish},`
      });
      //remove the final comma from the string.    
      garnishString = garnishString.slice(0,-1);
    }

    const reqBody = {
      name: cocktailName,
      ingredients: ingredients,
      garnish: garnishString,
      directions: directions,
      liquor: liquors
    }
    axios.post('http://localhost:8080/', reqBody)
    .then(res => location.reload())
    .catch(err => console.log(err));
  }

  const addLiquor = (liquor) =>{
    updateLiquors([...liquors, liquor])
  }

  const liquorsElements = [];
  liquors.forEach((liquor, index) => {
    liquorsElements.push(
      <li key={index} className='liquor'>{liquor}</li>
    )
  })


  const addIngredients = (amount, ingredient) => {
    updateIngredients([...ingredients, [amount+' ',ingredient]]);
  }
  const ingredientElments = [];
  ingredients.forEach((ingredientArray, index) => {
    ingredientElments.push(
      <li key = {index} className = 'ingredient'>{ingredientArray[0]}, {ingredientArray[1]}</li>
    )
  })


  const addGarnish = (garnish) => {
    updateGarnishes([...garnishes, garnish]);
  }

  const garnishElements = [];
  garnishes.forEach((garnish, index) => {
    garnishElements.push(
      <li key = {index} className = 'garnish'>{garnish}</li>
    )
  })

  const addDirection = (direction) => {
    const step = directions.length + 1;
    direction = `STEP ${step}: ` + direction;
    updateDirections([...directions, direction]);
  }

  const directionsElements = [];
  directions.forEach((direction, index) => {
    directionsElements.push(
      <li key = {index} className = 'direction'>{direction}</li>
    )
  })


  const categories = [
   
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
    <div id='addDrinkForm'>
      {/* name is a string */}
      <div id= 'addIngredientsDiv'>
      <label htmlFor='name' style={{display: 'block'}}>Name of your cocktail:</label>
      <input type='text' name='name' id='name'></input>
      <button style={{display: 'block'}} onClick = {() => updateCocktailName(document.getElementById('name').value)}>Submit Name</button>
     
      <br/>
      
      {/* liquor is an array of strings  */}
  
      <label style={{display: 'block'}} htmlFor='liquor'>Liquor type :</label>
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
      <button style={{display: 'block'}} onClick = {() => addLiquor(document.getElementById('liquor').value)}>Choose your Liquor(s)</button>
      <br/>

      {/* ingredients is an array of array of strings. example: */}
      {/*ingredients: [ ['lime cordial', '50ml'], ['gin', '50ml'] ]*/}
      <label style={{display: 'block'}} htmlFor='ingredients'>Ingredient Amount:</label>
      <input type='text' name='ingredient Amount' id='ingredient-amount'></input>
      <label style={{display: 'block'}} htmlFor='ingredients'> Ingredient Name:</label>
      <input type='text' name='ingredient Items' id='ingredient-items'></input>
      <button 
        style={{display: 'block'}} 
        onClick ={() => addIngredients(document.getElementById('ingredient-amount').value, document.getElementById('ingredient-items').value)}
        >
        Submit ingredient
      </button>
      
      <br/>

      {/*Garnish is an array of strings i.e.: garnish: ['lime', 'edible flower'] */}
      <label style={{display: 'block'}} htmlFor='garnish'>Garnish :</label>
      <input type='text' name='garnish' id='garnishInput'></input>
      <button style={{display: 'block'}} onClick ={() => {addGarnish(document.getElementById('garnishInput').value)}}>Add the garnish</button>
      <br/>
    
      {/*Directions is a string with special formatting i.e.
      'STEP 1 .... STEP 2......
      */}
      <label style={{display: 'block'}} htmlFor='liquor'>Directions :</label>
      <input type='text' name='directions' id='directions'></input>
      <button style={{display: 'block'}} onClick = {() => addDirection(document.getElementById('directions').value)}>Add the directions</button>
    
    
    </div>

    <div id='newDrinkState' className='Modal'>
      <p>Cocktail name: </p>
      <h2>{cocktailName}</h2>
      <p>Liquors:</p>
      {liquorsElements}
      <p>Ingredients:</p>
      {ingredientElments}
      <p>Garnishes:</p>
      {garnishElements}
      <p>Directions:</p>
      {directionsElements}
      <button onClick = {() => postToDB()}>Click HERE to submit custom cocktail</button>
    </div>
  </div>
  )
};

export default AddDrinkForm;