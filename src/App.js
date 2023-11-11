import React from 'react';
import './App.css';
import Navbar from './components/NavbarComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Product from './pages/product';

function App() {
  return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/mallet' exact element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product' element={<Product/>}/>
          </Routes>
        </Router>
      </div>

  );
}

export default App;
