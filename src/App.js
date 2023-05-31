import { useState } from 'react';
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboladores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboladores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Frontend"/>
      <Time nome="Data Science"/>
      <Time nome="Devops"/>
    </div>
  );
}

export default App;
