
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from "./components/navbar.jsx";
import { Shop } from './pages/shop/shop.jsx';
import { Cart } from "./pages/cart/cart.jsx"
import { Checkout } from "./pages/checkout/checkout.js"
import { ShopContextProvider } from './context/shop-context.jsx';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/Checkout' element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>

  );
}

export default App;
