import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Erro from './pages/Erro';
import Produtos from './pages/Produtos';

export default function src() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/sobre' component={Sobre} />
        <Route path="/produto/:id" component={Produtos} />
        <Route path='*' component={Erro} />
      </Switch>
    </BrowserRouter>    
  );
}
