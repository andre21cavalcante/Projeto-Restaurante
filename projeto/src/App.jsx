import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home/home.jsx';
import Footer from './components/footer/footer.jsx';
import Carrinho from './pages/carrinho/carrinho.jsx';
import Cardapio from './pages/cardapio/cardapio.jsx';

function App() {
  return (
    <div >
      <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/carrinho" element={<Carrinho/>}/>
            <Route path= "/cardapio" element={<Cardapio/>}/>
        </Routes>
      </Router>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
