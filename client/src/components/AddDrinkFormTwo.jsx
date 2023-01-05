import { useContext, useState } from 'react';
import axios from 'axios';

const AddDrinkForm = () => {
  const [cocktailName, updateCocktailName] = useState('');
  const [liquors, updateLiquors] = useState('whiskey');
  const [ingredients, updateIngredients] = useState('');
  const [garnishes, updateGarnishes] = useState('');
  const [directions, updateDirections] = useState('');

  const postToDB = () => {
    //name will stay the same
    //ingredients needs to be parsed [['ingred1','amount1'],['ingred2', 'amount2']]
    //liquors parsed into single elemnet array --> ['Gin']
    //garnishes string --> "Garnish: garnish1, garnish2, garnish3"
    //directions each line parsed into arry element --> ['Step 1: ...', 'Step 2...']

    const parsedName = cocktailName;
    const parsedIngredients = ingredients.split('\n').map(e=>e.split(','));
    const parsedGarnish = 'Garnish: ' + garnishes;
    const parsedDirections = directions.split(`\n`);
    const parsedLiquors = [liquors];

    const reqBody = {
      name: parsedName,
      ingredients: parsedIngredients,
      garnish: parsedGarnish,
      directions: parsedDirections,
      liquor: parsedLiquors
    }
    console.log('req body:', reqBody);
    axios.post('http://localhost:8080/', reqBody)
    .then(res => location.reload())
    .catch(err => console.log(err));
  }

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
      <input type='text' name='name' id='name' onChange = {() => updateCocktailName(document.getElementById('name').value)}></input>
     
      <br/>
      
      {/* liquor is an array of strings  */}
  
      <label style={{display: 'block'}} htmlFor='liquor'>Liquor type :</label>
      <select
          id="liquor"
          // value={selected}
          onChange={() => updateLiquors([document.getElementById('liquor').value])}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toLocaleUpperCase()}
            </option>
          ))}
        </select>
      <br/>

      {/* ingredients is an array of array of strings. example: */}
      {/*ingredients: [ ['lime cordial', '50ml'], ['gin', '50ml'] ]*/}
      <label style={{display: 'block'}} htmlFor='ingredients'>Ingredients (ingredient, amount)</label>
      <textarea placeholder={'INGREDIENT1, AMOUNT1\nINGREDIENT2, AMOUNT2'} type='text' name='ingredients' id='ingredients' onChange = {() => {updateIngredients(document.getElementById('ingredients').value)}}></textarea>
      {/* <button 
        style={{display: 'block'}} 
        onClick ={() => addIngredients(document.getElementById('ingredient-amount').value, document.getElementById('ingredient-items').value)}
        >
        Submit ingredient
      </button>
       */}
      <br/>

      {/*Garnish is an array of strings i.e.: garnish: ['lime', 'edible flower'] */}
      <label style={{display: 'block'}} htmlFor='garnish'>Garnish :</label>
      <input type='text' name='garnish' placeholder={'garnish1, garnish2, etc.'} id='garnishInput' onChange = {() => {updateGarnishes(document.getElementById('garnishInput').value)}}></input>
      {/* <button style={{display: 'block'}} onClick ={() => {addGarnish(document.getElementById('garnishInput').value)}}>Add the garnish</button> */}
      <br/>
    
      {/*Directions is a string with special formatting i.e.
      'STEP 1 .... STEP 2......
      */}
      <label style={{display: 'block'}} htmlFor='liquor'>Directions :</label>
      <textarea placeholder = {`Step 1: first step \nStep 2: second step \nStep 3: ...`}type='text' name='directions' id='directions' onChange = {() => {updateDirections(document.getElementById('directions').value)}}></textarea>
      {/* <button style={{display: 'block'}} onClick = {() => addDirection(document.getElementById('directions').value)}>Add the directions</button> */}
<br/>
      <button onClick = {() => {

        postToDB();
      }
      }>Click HERE to submit custom cocktail</button>
    
    </div>

    {/* <div id='newDrinkState' className='Modal'>
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
    </div> */}
  </div>
  )
};

export default AddDrinkForm;