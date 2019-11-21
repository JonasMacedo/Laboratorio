import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Header from './Components/Header';
import Home from './pages/Content/Home';
import Erro from './pages/Content/Error';
import Cont from './pages/Content/Sobre';

export default function Routes(){
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path="/filme/:id" component={Cont} />
        <Route path='*' component= {Erro} />
      </Switch>
    </BrowserRouter>
  );
}
