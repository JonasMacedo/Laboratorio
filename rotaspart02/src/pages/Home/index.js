import React from 'react';

import {Link} from 'react-router-dom';
// import { Container } from './styles';

export default function Home() {
  return (
    <>
        <h2>Bem vindo a pagina principal</h2>
        <br/>
        <Link to='/sobre'>Ir para Sobre</Link>
        <hr/>
    </>
  );
}
