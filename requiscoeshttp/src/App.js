import React, { Component } from 'react';
import './style.css';

//https://sujeitoprogramador.com/rn-api/?api=posts
import Rotas from './routes';

class App extends Component{

  render(){
    return(
      <div>
        <Rotas/>
       </div>
    );
  }

}

export default App;