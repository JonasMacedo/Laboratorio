import React,{useState, useEffect} from 'react';

export default function App(){

    const [contador, setContador] = useState();
    
    /*

    Caso queira inserir mais conteudo.

    function incrementar(){
        const plusContador = contador+1;
        setContador(plusContador);
    }
    
    function decrementar(){
        const removeContador = contador-1;
        if(contador>0){
            setContador(removeContador);
        }else{
            alert('Chegou a ZERO');
        }
    }
    */
    useEffect(()=>{
        setContador(0);
    },[]);

    return(
        <div>
            <h1>Contador</h1>
            <h3>
                <button onClick={()=>setContador(contador-1)}>-</button>
                {contador}
                <button onClick={()=>setContador(contador+1)}>+</button>
            </h3>
        </div>

    ); 

}
