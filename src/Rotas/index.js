import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from '../paginas/PaginaInicial';
import Contato from '../paginas/Contato';

const Rotas = () => (
  <BrowserRouter>
    <Routes>    
      <Route exact path='/' element={ <PaginaInicial /> }/>
      <Route exact path='/contato' element={ <Contato /> } />
    </Routes>
  </BrowserRouter>
);

export default Rotas;