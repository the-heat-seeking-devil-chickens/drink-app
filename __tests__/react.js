import React from 'react'
import userEvent  from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import regeneratorRuntime from 'regenerator-runtime';

import Reacttestrenderer from 'react-test-renderer';

import { useState, useContext } from 'react';
import CocktailContext from '../client/src/context/CocktailContext';
import  CardList  from '../client/src/components/CardList.jsx';
import Card from '../client/src/components/Card.jsx';
import App from '../client/src/App.jsx'


// console.log('This is CardList Line 9:', <CardList/>);


describe('Unit testing React componenets', () => {
  describe('Test tests:', () => {
    const number = 1;

    test('Exprect number to equal 1', () => {
      expect(number).toEqual(1);
    })
  });

  describe('CardList Tests:', () => {

    // Check to make sure there is a button with an id of desktop-button
    test('Should contain addDrink button', () => {
        // console.log('this is your cardlist', <CardList/>)
    //   const cocktail = {
    //     name : 'Dummy cocktail',
    //     directions : ['do some stuff'],
    //     ingredients : ['only one thing here'],
    //     liquor: 'Whiskey',
    //     garnish: 'Olive',
    //     id: 5
    //   }
      render (
        // <Card id = {1} cocktail={cocktail}/>
        <CardList/>
      );
      const addDrinkButton = screen.getByText('Add Recipie', {id: 'desktop-button'});
      expect(addDrinkButton).toBeInTheDocument();
    })
  });
});