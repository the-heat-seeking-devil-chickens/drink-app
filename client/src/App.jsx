import CardList from './components/CardList';
import { CocktailProvider } from './context/CocktailContext';

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
