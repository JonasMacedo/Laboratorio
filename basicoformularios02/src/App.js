import React,{ useState} from 'react';

function App() {

  const [user,setUser] = useState();
  const[email,setEmail] = useState();

  function plusForm(event){
    event.preventDefault();
    alert('Teste!');
    
  }

  return (
    <>
      <form onSubmit={plusForm}>
        <h1>Novo Usuario</h1>
          <label htmlFor="Nome">Nome:</label> 
          <input 
            type="text" 
            id="nome" 
            placeholder="Nome do usuario"
            onChange={event =>{setUser(event.target.value)}}/>
          <br/>
          <label htmlFor="label">Email:</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Informe o email"
            onChange={event=>{setEmail(event.target.value)}}/>
          <br/>    
          <button type="submit">Cadastrar</button>
          <h3>
            {user}
            <br/>
            {email}
          </h3>
      </form>
    </>
  );
}

export default App;
