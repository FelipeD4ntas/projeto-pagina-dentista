import React from 'react';
import { Link } from 'react-router-dom';

const Topo = () => (
  <nav>
    <div className='box-logo'>
      <Link to='/'>
        <img src='../assets/dente.png' alt='Dente'/>
        Dentes Saudáveis
      </Link>
    </div>
    
    <div className='box-links'>
      <Link to='/'>Home</Link>
      <Link to='/contato'>Contato</Link>
    </div>
  </nav>
);

export default Topo;