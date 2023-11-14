import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const sumarClick = () => {
    setNumClicks(numClicks + 1);
    console.log('Click');
  };

  const reiniciarContador = () => {
    setNumClicks(0);
    console.log('Reiniciar');
  };

  return (
    <div className="App">

      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp'
        />
      </div>

      <div className='contenedor-principal'>

        <Contador 
          numClicks={numClicks} />

        <Boton 
          texto="Click"
          esBotonDeClick={true}
          handleClick={sumarClick} />

        <Boton 
          texto="Reiniciar"
          esBotonDeClick={false} 
          handleClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
