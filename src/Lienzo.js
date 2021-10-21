import React from 'react';
import Fila from "./Fila"
import './Lienzo.css';

function Lienzo(props) {

    let filas = [];

    for (let i = 0; i < 10; i++) {
        filas.push(<Fila selectedColor={props.selectedColor} />);
    }

    return (
        <div className='filas'>
            {filas}
        </div>
    );
}

export default Lienzo;