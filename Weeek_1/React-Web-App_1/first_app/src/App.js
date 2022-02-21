import './App.css';
import MainContainer from './components/MainContainer';
import cardData from './data/CardData';


function App() {
  return (
    <main>
      <MainContainer list={cardData} />
    </main>
  );
}

export default App;
