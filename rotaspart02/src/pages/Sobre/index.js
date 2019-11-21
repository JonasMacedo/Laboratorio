import React from 'react';

import {Link} from 'react-router-dom';
// import { Container } from './styles';

export default function Sobre() {
  return (
      <div>
        <h2>Pagina sobre</h2>
        <br/>
        <Link to='/'>Ir para Home</Link>
        <hr/>
      </div>
  );
}
