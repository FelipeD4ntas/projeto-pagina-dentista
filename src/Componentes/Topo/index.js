import React from 'react';
import { Link } from 'react-router-dom';
import './estilo.css';

const Topo = () => {
  return (
    <nav>
      <div className='box-logo'>
        <Link to='/' className='link-home'>
          <img src='assets/dente.png' alt='Dente Logo'/>
          <p className='item-link texto-logo'>Dentes Saudáveis</p>
        </Link>
      </div>
      
      <div className='box-links'>
        <Link to='/' className='item-link'>Home</Link>
        <Link to='/contato' className='item-link'>Contato</Link>
      </div>
    </nav>
  );
}

export default Topo;