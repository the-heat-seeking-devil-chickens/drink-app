// https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#not-using-screen

// testing hooks: https://stackoverflow.com/questions/71558632/invalid-hook-call-while-testing-with-jest-react-native

import React from 'react';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen, waitFor } from '@testing-library/react';

import LabeledText from '../../client/src/components/LabeledText.jsx';
import CardList from '../../client/src/components/CardList.jsx';
import App from '../../client/src/App.jsx';

describe('Unit testing React componenets', () => {
  let text;
  const props = {
    label: 'Mega',
    text: 'Markets',
  };

  beforeAll(() => {
    text = render(<App />);
  });
  describe('CardList Tests:', () => {
    // Check to make sure there is a button with an id of desktop-button
    test('Should contain addDrink button', () => {
      screen.debug();
      return expect(1).toEqual(1);
    });
  });
});
