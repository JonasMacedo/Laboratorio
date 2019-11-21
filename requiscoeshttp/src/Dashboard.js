import React, { useEffect, useState} from 'react';
import api from './services/api.js';


export default function Dashboar(){

    const [cont, setCont] = useState([]);

    useEffect(()=>{
        async function carregar(){
            const response = await api.get();

            console.log(response.data);
            setCont(response.data);
        }

        carregar();
    },[]);

    return(
        <di className='container'>
            <h1>Olá Mundo!!</h1>
            {cont.map(item=>(
                <article key={item.id} className='post'>
                    <strong className='titulo'>{item.titulo}</strong>
                    <img src={item.capa} className='capa' alt="imagem"/>
                    <p className='subtitulo'>{item.subtitulo}</p>
                </article>
            ))}
        </di>
    )
}