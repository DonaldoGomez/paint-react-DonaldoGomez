import React, {useState} from 'react';
import './Cuadrito.css';

function Cuadrito(props) {
    const [cuadritoColor, setCuadritoColor] = useState("white");
    const [oldColor, setOldColor] = useState(cuadritoColor);
    const [pintado, setPintado] = useState(false);

    function applyColor(){
        setCuadritoColor(props.selectedColor);
        setPintado(true);
    }
    function changeColorOnHover() {
        setOldColor(cuadritoColor);
        setCuadritoColor(props.selectedColor);
    }

    function resetColor() {
        if (!pintado)
            setCuadritoColor(oldColor);
        
        setPintado(false);
    }

    return <div className="cuadrito" onMouseDown={applyColor} onMouseEnter={changeColorOnHover} style={{ backgroundColor: cuadritoColor}} onMouseLeave={resetColor}></div>
}

export default Cuadrito ;