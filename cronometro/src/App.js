import React,{useState} from 'react';
import './App.css';
import './style.css';

import cronometro from'./img/cronometro.png'

export default function App() {
  const [temp, setTemp] = useState(0);
  const [timer, setTimer] = useState(null);
  
  function tempo(op=true){
    var tmp = 0.0;
    
    if(op === true ){
      console.log('vai contar')

      setTimer (setInterval(() => {
        /* Componentes funcionais não podem declarar variaveis, quando eles renderizam 
        eles executam a funcao e reinicializa as variaveis e elas perdem os conteudos. */
        tmp += 0.1;
        setTemp(tmp);
      }, 100));
    }else{
      console.log('Vai parar');
      clearInterval(timer);
      return;
    }
    return;
  }

  return (
    <div className='container'>
      <img src={cronometro} alt="cronometro"/>
      <p className="timer">{temp.toFixed(1)}</p>
      <div className='btns'>
        <button onClick={()=>{tempo()}}>VAI</button>
        <button onClick={()=>{tempo(false)}}>PARAR</button>
      </div>
    </div>
  );
}
