import React from 'react';

const colors = ['black', 'white', 'gray', 'red', 'orange', ' yellow', 'green', 'lime', 'navy', 'blue', 'aqua', 'purple', 'pink']

function ColorPicker(props) {

    const handleClick = (event) => {
        props.setSelectedColor(event.target.name);
    }

    return (
        <ul style={{ display: 'flex', width:'100%', justifyContent: 'space-evenly', listStyle: 'none' }}>
            {/*Seleccionar un color*/}
            {colors.map((color) => {
                const isSelected = color === props.selectedColor;
                const borderStyle = isSelected ? '5px solid black' : '1px solid black';

                return (
                    <li
                        key={color}
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
    );
}
export default ColorPicker;