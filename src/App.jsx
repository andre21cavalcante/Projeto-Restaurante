import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from './pages/Home/home';
import Carrinho from './pages/carrinho/carrinho';
import Cliente from './pages/Clientes/cliente';
import Visualizar from './pages/Visualizar.jsx/visualizar';
import Atualizar from './components/Update/atualizar';
//import Teste from './pages/Home/teste';

function App() {
  return (
    <div>

      <Router>
       
        <Routes>
         <Route path="/" element={<Login />} />
          <Route path='/home' element={<Home/>}/>
          <Route path= "/carrinho" element={<Carrinho/>}/>
          <Route path='/clientes' element={<Cliente/>}/>
          <Route path='/visualizar/:id' element={<Visualizar/>}/>
          <Route path='/atualizar/:id' element={<Atualizar/>}/>

          <Route/>
          <Route/>
        </Routes>



      </Router>
  {/* <Home/> */}

 

    </div>
  );
}

export default App;
