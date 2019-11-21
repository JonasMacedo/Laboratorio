import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';
// import { Container } from './styles';

export default function Header() {
  return (
    <div className='header'>
        <Link to='/'>Header da pagina</Link>    
    </div>
  );
}
