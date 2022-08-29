import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Lista from './componentes/lista';
function App() {

  const listas = [
    {
      nome: 'Casa',
      corPrimaria: '#57C278',
      corSegundaria: '#D9F7E9',
    },
    {
      nome: 'Estudo',
      corPrimaria: '#82CFFA',
      corSegundaria: '#E8F8FF',
  },
  {
      nome: 'Trabalho',
      corPrimaria: '#A6D157',
      corSegundaria: '#F0F8E2',
  },
  {
      nome: 'Lazer',
      corPrimaria: '#D86EBF',
      corSegundaria: '#FAE95F5',
  }
  ]

  const[tarefas, setTarefas] = useState([])

  const aoNovoColaborador = (tarefa) =>{
    setTarefas([...tarefas, tarefa])
  }
  return (

    <div className="App">
      <Banner />
      <Formulario listas={listas.map(lista => lista.nome)} aoColaboradorCadastrado={tarefa => aoNovoColaborador(tarefa)}/>
      {listas.map(lista => <Lista 
        key={lista.nome}
        nome ={lista.nome}
        corPrimaria={lista.corPrimaria} 
        corSegundaria={lista.corSegundaria} 
        tarefas={tarefas.filter(tarefa => tarefa.lista === lista.nome)}
        /> )}
    </div>
  );
}

export default App;
