import { useState } from 'react';
// import { IoArrowForwardOutline } from 'react-icons/io5';
import Modal from './Modal';
import axios from 'axios';

const Card = ({ cocktail }) => {
  const { name, directions, ingredients, liquor, garnish, id } = cocktail;
  const [showModal, setShowModal] = useState(false);
  const ingredientList = [];
  const directionsList = [];
  const liquorList = [];
  const liquorData = [];

  const getImage = () => {
    const snakeName = name.toLowerCase().replaceAll(' ', '-');

    return snakeName;
  };

  const deleteRecipie = () => {
    console.log('name of recipie:', name);
    axios.delete('http://localhost:8080/', {data: { name: name } })
    .then(res => {
      console.log('res', res)
      location.reload()
    })
    .catch(err => console.log(err));
  }

  ingredients.forEach((ingredient, i) => {
    ingredientList.push(
      <li key={i} className="ingredient">
        {ingredient}
      </li>
    );
  });

  directions.forEach((step, i) => {
    directionsList.push(
      <li key={i} className="directions">
        {step}
      </li>
    );
  });

  liquor.forEach((liquor, i) => {
    liquorList.push(
      <span key={i} className="liquor">
        {liquor.toUpperCase() + ' '}
      </span>
    );
  });

  liquor.forEach((liquor, i) => {
    if (liquor !== ' | ') {
      liquorData.push(liquor.toLocaleLowerCase());
    }
  });

  return (
    <div className="card-box">
      <img src={`../src/assets/${getImage()}.jpg`}
       onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src="../src/assets/scratch-logo.png";
      }} 
       />
      <div className="card-info" data-liquor={[liquorData]}>
        <h2 className="cocktail-name">{name}</h2>
        <div className="liquor-list">{liquorList}</div>
        <button className="showModal" onClick={() => setShowModal(true)}>
          {/* View Recipe <IoArrowForwardOutline /> */}
          View Recipe
        </button>
      </div>
      {showModal ? (
        <Modal className="modal-active">
          <div className="card-box">
            <img src={`../src/assets/${getImage()}.jpg`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src="../src/assets/scratch-logo.png";
            }}
            alt={name} />
            <div className="card-info">
              <button className="hideModal" onClick={() => setShowModal(false)}>
                X
              </button>
              <h2 className="cocktail-name">{name}</h2>
              <div className="liquor-list">{liquorList}</div>
              <h3>Ingredients</h3>
              <ul className="ingredient-list">{ingredientList}</ul>
              <span className="garnish">{garnish}</span>
              <h3>Directions</h3>
              <ul className="directions-list">{directionsList}</ul>
              
              
              <button style = {{marginRight: '1rem'}}id='UpdateButton'>Update this recipe</button>
              <button id='DeleteButton' onClick = {() => deleteRecipie()}>Delete this recipe</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Card;
