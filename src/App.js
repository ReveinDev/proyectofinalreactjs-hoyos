import './css/main.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <header>
      <NavBar />
      <ItemListContainer greetings="Bienvenido a Lo Del Gordo Fallen! En nuestro bodegón podrás disfrutar de nuestras deliciosas carnes, pastas y minutas acompañados de la mejor selección de vinos, cervezas y gaseosas."/>
    </header>
  );
}

export default App;
