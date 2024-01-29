import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Product from './pages/product';
import Faq from "./pages/faq";
import Team from "./pages/team";

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
                    <Route path="/team" element={<Team/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;