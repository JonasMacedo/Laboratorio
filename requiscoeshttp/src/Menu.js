import React, {Component} from 'react';
import './style.css';

//https://sujeitoprogramador.com/rn-api/?api=posts

class Menu extends Component{

  constructor(props){
    super(props);
    this.state = {
      nutri:[]
    };

  }
  
  componentDidMount(){
    let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
    fetch(url)
    .then((r) => r.json())
    .then((json) => {
      let state = this.state;
      state.nutri = json;
      this.setState(state);
      console.log(json);
    })
  }

  render(){
    return(
      <div className="container">
        <header>
          <h1>Teste do requisição.</h1>
        </header>
        {this.state.nutri.map((item)=>{
          return(
            <article key={item.id} className='post'>
              <strong className='titulo'>{item.titulo}</strong>
              <img src={item.capa} alt="Imagem" className='capa'/>
              <p className='subtitulo'>{item.subtitulo}</p>
              <a className='btn' href="#">Acessar</a>
            </article>
          );
        })}
      </div>
    );
  }

}
export default Menu;