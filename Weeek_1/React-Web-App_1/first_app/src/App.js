
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarComp from './components/NavbarComp';
import CardComp from './components/CardComp';
import FooterComp from './components/FooterComp';

function App() {
  return (
    <div className="App">
      <div class="container-fluid m-2 p-3 bg-primary">
        <NavbarComp/>
        </div>
        <main class="container">
        <CardComp/>
        </main>
        <div class="container-fluid">
        <FooterComp/>
        </div>
    </div>
  );
}

export default App;
