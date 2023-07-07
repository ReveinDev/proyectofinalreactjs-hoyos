import './css/main.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import	{ BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/comida' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
