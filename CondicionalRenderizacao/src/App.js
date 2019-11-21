import React, { useState } from 'react';

export default function App() {
  
  const [atualiza=true, setAtualiza] = useState();
  
  function teste(op){
    //console.log(typeof op);
    op === 1 ? setAtualiza(false):setAtualiza(true);
  }
  return (
    <>
      {atualiza ? 
        <div>
          <h2>Faça o login</h2> 
          <button onClick={()=>teste(1)} >Entrar no sistema</button>
        </div> 
          :
        <div>
          <h2>Bem-vindo ao sistema!</h2>
          <button onClick={()=>{teste(2)}}>Sair</button>
        </div> 
        }
    </>

  );
}
