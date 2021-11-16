import { useEffect, useState } from 'react';
import './ColorPicker.css';
import axios from 'axios';
  

function ColorPicker(props) {

  const [colores, setColores] = useState([]);
  const [estado, setEstado] = useState("IDLE");
  const coloresAPI = [];

  useEffect(()=>{
    setEstado("LOADING");
    axios.get("https://www.colr.org/json/colors/random/13").then( response => {
      response.data.colors.forEach(element => {
        coloresAPI.push(`#${element.hex}`);
      })
      setColores(coloresAPI);
      setEstado("COMPLETE")
    }).catch(e => {
      alert("Error: "+e);
    }) 
  }, []) 

    const handleClick = (event) => {
        props.setSelectedColor(event.target.name);
    }
    if(estado === "LOADING"){
      return(
        <div className={"lds-ripple"}>
          <div></div>
          <div></div>
        </div>
      )
    }else if(estado === "COMPLETE"){
      return (
        <ul style={{ display: 'flex', width:'100%', justifyContent: 'space-evenly', listStyle: 'none' }}>
            {colores.map((color, i) => {
                const isSelected = color === props.selectedColor;
                const borderStyle = isSelected ? '5px solid black' : '1px solid black';

                return (
                    <li
                        key={color + i}
                        onClick={handleClick}
                        name={color}
                        style={{
                            width: '2rem',
                            height: '2rem',
                            outline: borderStyle,
                            background: color
                        }}
                    >
                        <button
                            type="button"
                            onClick={handleClick}
                            name={color}
                            style={{
                                width:'100%', 
                                height:'100%', 
                                background: color,
                                border: 'none'
                            }}
                        >
                        </button>
                    </li>
                )
            })}
        </ul>
      )
    }else{
      return(
        <div>Error :(</div>
      )
    }
    
}
export default ColorPicker;