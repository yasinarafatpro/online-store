import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ProductScreen } from './screen/ProductScreen';
import { HomeScreen } from './screen/HomeScreen';
import { CartScreen } from './screen/CartScreen';
function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">Easy Bazar</Link>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path='/cart/:id' element={<CartScreen/>}/>
            <Route path='/product/:id' element={<ProductScreen/>} />
            <Route path='/' exact element={<HomeScreen/>} />
          </Routes>
        </main>
        <footer className="row center">@ All Right Received</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
