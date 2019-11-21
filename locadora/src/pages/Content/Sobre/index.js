import React, {useEffect,useState} from 'react';

import './style.css';

import api from '../../../services/api';

export default function Conteudo(props) {
  
 const [film, setFilm] = useState([]);
 
 const {id} = props.match.params;
 console.log('id do filme: ',id);
 
 useEffect(()=>{
   async function loadFilm(){
      const response = await api.get(`/${id}`);
      console.log('Resposta do servidor: ',response.data);

      setFilm(response.data);

    } 

    loadFilm();

  },[id]);

  return (
    <div className='infoFilme' >
      <h1>Sobre o filme </h1>
        <article key={film.id}>
          <h1> {film.nome} </h1>
          <img src={film.foto} alt={film.nom}/>
          {film.length !== 0 && 
            <p> <h3>Sinopse: </h3> {film.sinopse} </p>
          }
        </article>
    </div>
  );
}
