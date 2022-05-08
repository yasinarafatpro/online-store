import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductScreen } from './screen/ProductScreen';
import { HomeScreen } from './screen/HomeScreen';
function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">Easy Bazar</a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Routes>
            <Route path='/product/:id' element={<ProductScreen/>} />
            <Route path='/' element={<HomeScreen/>} />
          </Routes>
        </main>
        <footer className="row center">@ All Right Received</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
