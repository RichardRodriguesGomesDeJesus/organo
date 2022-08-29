import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Time from './componentes/time';
function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSegundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSegundaria: '#E8F8FF',
  },
  {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSegundaria: '#F0F8E2',
  },
  {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSegundaria: '#FDE7E8'
  },
  {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSegundaria: '#FAE95F5',
  },
  {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSegundaria: '#FFF5D9',
  },
  {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSegundaria: '#FFEEDF',
  }
  ]

  const[colaboradores, setColaboradores] = useState([])

  const aoNovoColaborador = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
  }
  return (

    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)}/>
      {times.map(time => <Time 
        key={time.nome}
        nome ={time.nome}
        corPrimaria={time.corPrimaria} 
        corSegundaria={time.corSegundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        /> )}
    </div>
  );
}

export default App;
