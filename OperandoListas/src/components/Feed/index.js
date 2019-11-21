import React from 'react';


export default function Feed(props) {
  return (
    <>
        <div key={props.id}>
            <h2>{props.nome}</h2>
            <p>
              {props.likes > 1 ? props.likes + ' curtidas' : props.likes + ' curtida'} <br/>
              {props.coment >0 ? props.coment + ' comentarios' : props.coment + ' comentario'}
            </p>
            <hr/>
        </div>
    </>
  );
}
