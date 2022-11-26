import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Lista from './componentes/lista';
function App() {

  const listas = [
    {
      nome: 'Vegan',
      corPrimaria: '#57C278',
      corSegundaria: '#D9F7E9',
    },
    {
      nome: 'Frios',
      corPrimaria: '#82CFFA',
      corSegundaria: '#E8F8FF',
  },
  {
      nome: 'Massas',
      corPrimaria: '#A6D157',
      corSegundaria: '#F0F8E2',
  },
  {
      nome: 'Bebidas',
      corPrimaria: '#D86EBF',
      corSegundaria: '#FAE95F5',
  }
  ]

  const[cards, setCards] = useState([])

  const aoNovoColaborador = (card) =>{
    setCards([...cards, card])
  }
  return (

    <div className="App">
      <Banner />
      <Formulario listas={listas.map(lista => lista.nome)} aoColaboradorCadastrado={card => aoNovoColaborador(card)}/>
      {listas.map(lista => <Lista 
        key={lista.nome}
        nome ={lista.nome}
        corPrimaria={lista.corPrimaria} 
        corSegundaria={lista.corSegundaria} 
        cards={cards.filter(card => card.lista === lista.nome)}
        /> )}
    </div>
  );
}

export default App;
