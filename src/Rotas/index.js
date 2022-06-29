import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from '../Paginas/PaginaInicial';
import Contato from '../Paginas/Contato';

const Rotas = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>    
      <Route exact path='/' element={ <PaginaInicial /> }/>
      <Route exact path='/contato' element={ <Contato /> } />
    </Routes>
  </BrowserRouter>
);

export default Rotas;