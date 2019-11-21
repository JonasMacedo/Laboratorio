import React from 'react';

import Feed from './components/Feed';

export default function App() {

  const lista = [
    {id: 1, username:'Jonas', curtidas:12, comentarios:7 },
    {id: 2, username:'Lucas', curtidas:7, comentarios:0 },
    {id: 3, username:'Diego', curtidas:130, comentarios:47 },
    {id: 4, username:'Felipe', curtidas:150, comentarios:25 },
    {id: 5, username:'Matheus', curtidas:100, comentarios:10 },
    {id: 6, username:'Peterson', curtidas:0, comentarios:12 },
  ]

  return (
    <>

     <h1>Lista:</h1>{lista.map(repo =>(
        <Feed id={repo.id} nome={repo.username} likes={repo.curtidas} coment={repo.comentarios}/>
      ))}
    </>
  );
}

