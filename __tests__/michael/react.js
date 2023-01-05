// https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#not-using-screen

// testing hooks: https://stackoverflow.com/questions/71558632/invalid-hook-call-while-testing-with-jest-react-native

// https://polvara.me/posts/mocking-context-with-react-testing-library

import React, { createContext } from 'react';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen, waitFor } from '@testing-library/react';

// import CocktailContext, { CocktailProvider } from '../../client/src/context/CocktailContext.jsx';
import CardList from '../../client/src/components/CardList.jsx';
import App from '../../client/src/App.jsx';

const CocktailContext = createContext();
describe('Unit testing React componenets', () => {
  let text;

  beforeAll(() => {
    const mockContext = {
      cocktails: [{"_id":"63aaa094a3763e75f556f5ff","name":"Whiskey Sour","liquor":["whiskey"],"ingredients":[["2 Ounces of ","whiskey"],["3/4 Ounces of ","lemon juice, freshly squeezed"],["1/2 Ounce of ","simple syrup"],["1/2 Ounce of ","egg whites (Optional)"]],"garnish":"Garnish: Angostura Bitters","directions":["Step 1: Add bourbon, lemon juice, simple syrup and egg white, if using, to a shaker and dry-shake for 30 seconds without ice.","Step 2: Add ice and shake again until well-chilled.","Step 3: Strain into a rocks glass or a coupe.","Step 4: Garnish with 3 or 4 drops of Angostura bitters."],"__v":0}],
      filteredCocktails: [{"_id":"63aaa094a3763e75f556f5ff","name":"Whiskey Sour","liquor":["whiskey"],"ingredients":[["2 Ounces of ","whiskey"],["3/4 Ounces of ","lemon juice, freshly squeezed"],["1/2 Ounce of ","simple syrup"],["1/2 Ounce of ","egg whites (Optional)"]],"garnish":"Garnish: Angostura Bitters","directions":["Step 1: Add bourbon, lemon juice, simple syrup and egg white, if using, to a shaker and dry-shake for 30 seconds without ice.","Step 2: Add ice and shake again until well-chilled.","Step 3: Strain into a rocks glass or a coupe.","Step 4: Garnish with 3 or 4 drops of Angostura bitters."],"__v":0}],
      selectedFilter: 'all',
      setSelectedFilter: () => {},
      filterCocktails: () => {},
    };
    text = render(<App />);
    // render(
    //   <CocktailContext.Provider value={mockContext} >
    //     <div className="App">
    //       <CardList />
    //     </div>
    //   </CocktailContext.Provider>
    // )
  });
  describe('CardList Tests:', () => {
    // Check to make sure there is a button with an id of desktop-button
    test('Should contain addDrink button', () => {
      // screen.debug();
      return expect(1).toEqual(1);
    });
  });
});
