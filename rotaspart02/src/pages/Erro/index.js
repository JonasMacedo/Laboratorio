import React from 'react';

import {Link} from 'react-router-dom';
// import { Container } from './styles';

export default function Erro() {
  return (
    <div>
        <h3>Ops!! Pagina não existe</h3>
        <br/>
        <Link to='/'>HOME</Link>
        <hr/>
    </div>
  );
}
