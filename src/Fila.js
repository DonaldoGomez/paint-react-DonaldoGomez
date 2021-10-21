import React from "react";
import Cuadrito from "./Cuadrito";
import './Fila.css';

function Fila(props){

    let cuadritos = [];

    for(let i = 0; i < 10; i++){
        cuadritos.push(<Cuadrito selectedColor={props.selectedColor}/>)
    }
    return <div className="fila">{cuadritos}</div>
}
export default Fila;