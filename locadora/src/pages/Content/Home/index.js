import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import './style.css';

import api from '../../../services/api';

export default function Home() {

  const [films, setFilms] = useState([]);

  useEffect(()=>{
    async function carregar(){
      
      const response = await api.get();
      console.log(response.data);

      setFilms(response.data);
    }

    carregar();

  },[]);

  return (
    <div className='container'>
      <div className = 'post'>
        {films.map(item =>(
          <article key={item.id} className='filme'>
            <strong> {item.nome} </strong>
            <img src={item.foto} alt="cartaz filme"/>
            <Link to={`/filme/${item.id}`}>Acessar</Link>
          </article>
        ))}
      </div>  
    </div>
  );
}

