import React, {useState} from 'react';
import './Cuadrito.css';

function Cuadrito(props) {
    const [currentColor, setCurrentColor] = useState("white");
    const [oldColor, setOldColor] = useState(currentColor);
    const [pintado, setPintado] = useState(false);

    function applyColor(){
        setCurrentColor(props.selectedColor);
        setPintado(true);
    }
    function changeColorOnHover() {
        setOldColor(currentColor);
        setCurrentColor(props.selectedColor);
    }

    function resetColor() {
        if (!pintado)
            setCurrentColor(oldColor);
        
        setPintado(false);
    }

    return (
        <div
            style={{ backgroundColor: currentColor }}
            className="cuadrito"
            onMouseDown={ (event) => {
                applyColor()
                console.log("Mouse Down", event);
            } }
            onMouseEnter={(event) => {
                changeColorOnHover()
                console.log("Mouse Enter", event);
            } }
            onMouseLeave={(event) => {
                resetColor()
                console.log("Mouse Leave", event);
            } }
        />
    )
}

export default Cuadrito ;