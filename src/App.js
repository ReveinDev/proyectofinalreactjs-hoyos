import './css/main.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import	{ BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart';
import { Orders } from './components/Orders';

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/comida/:id' element={<ItemDetailContainer />} />
            <Route path='/menu/:categoria' element={<ItemListContainer />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pedidos' element={<Orders />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
