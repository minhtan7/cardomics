
import './App.css';
import { Header } from './components/Header';
import { News } from './components/News';
import { Prediction } from './components/Prediction';
import { SearchCard } from './components/SearchCard';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchCard />
      <News />
      <Prediction />
    </div>
  );
}

export default App;
