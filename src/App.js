import React, { useState } from 'react';
import './App.css';
import ColorPicker from './ColorPicker';
import Lienzo from './Lienzo';



function App() {
  const [selectedColor, setSelectedColor] = useState('black');

  return (
    <div className="App">
      <div id='optionsWrapper'>
        <button className="button" type="button">New Game</button>
        <button className="button" type="button">Print</button>
        <div className='mensaje'>Choose a color to start painting</div>
        {/*Seleccionar un color*/}
        <ColorPicker selectedColor={selectedColor} setSelectedColor={setSelectedColor} className='colorpicker' />
      </div>
      <div id="lienzoWrapper">
        <Lienzo selectedColor={selectedColor} />
      </div>
    </div>
  );
}

export default App;
