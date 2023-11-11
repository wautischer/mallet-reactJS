// App.js
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavbarComponent';
import Home from './pages/home';
import About from './pages/about';
import Product from './pages/product';

function App() {
    return (
        <div>
            <HashRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;