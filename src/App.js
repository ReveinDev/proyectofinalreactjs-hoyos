import './css/main.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import	{ BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contacto } from './components/Contacto';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/comida/:id' element={<ItemDetailContainer />} />
          <Route path='/menu/:categoria' element={<ItemListContainer />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
