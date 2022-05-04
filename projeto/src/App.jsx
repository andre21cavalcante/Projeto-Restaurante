import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/footer/footer.jsx';
import Cardapio from './pages/cardapio/cardapio.jsx';


function App() {
  return (
    <div >
      <Router>
        <Header/>
        <Routes>
            <Route path= "/" element={<Cardapio/>}/>
        </Routes>
      </Router>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
