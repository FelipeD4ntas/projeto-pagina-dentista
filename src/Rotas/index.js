import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from './Paginas/PaginaInicial';
import Contato from './Paginas/Contato';

const Rotas = () => (
  <BrowserRouter>
    <Routes>    
      <Route exact path='/' element='{ <PaginaInicial /> }'/>
      <Route path='/contato' element='{ <Contato /> }' />
    </Routes>
  </BrowserRouter>
);

export default Rotas;