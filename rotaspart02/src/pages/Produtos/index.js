import React,{useEffect} from 'react';

// import { Container } from './styles';

export default function Produtos(props) {

  const { id } = props.match.params;

  /*
  useEffect(()=>{
    const { id } = props.match.params;
    console.log(id);
  },[]);
  */

  return (
    <div>
      <h3>Produtos numero: {id} </h3>
    </div>
  );
}
