// App.js
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavbarComponent';
import Home from './pages/home';
import About from './pages/about';
import Product from './pages/product';
import Faq from "./pages/faq";
import Impressum from "./components/ImpressumComponent";

function App() {
    return (
        <div>
            <HashRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/faq" element={<Faq />}/>
                </Routes>
            </HashRouter>
            <Impressum/>
        </div>
    );
}

export default App;