import CardList from './components/CardList';
import { CocktailProvider } from './context/CocktailContext';
import React from 'react';

function App() {
  return (
    <CocktailProvider>
      <div className="App">
        <CardList />
      </div>
    </CocktailProvider>
  );
}

export default App;
