import React from 'react';

import {Link} from 'react-router-dom';
// import { Container } from './styles';

export default function Header() {
  return (
    <div>
        <h1> Headar meu projeto</h1>
        <br/>
        <Link to='/sobre'>Home</Link>
        <hr/>
    </div>    
  );
}
