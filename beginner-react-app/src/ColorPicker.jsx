import React, { useState } from "react";

function ColorPicker(){

    const [color, setColor] = useState("#df00ff")

    function changeColor(event){
        setColor(event.target.value)
    }

    return(
    <div>
        <div className="color-section" style={{backgroundColor: color, borderColor: color, boxShadow: `0px 3px 40px 0px ${color}`}}>
            <p>Selected Color:<br/>{color}</p>
        </div>
        <div className="picker-section">
            <label>Select a Color:</label>
            <input value={color} onChange={changeColor} type="color"></input>
        </div>
    </div>
    );
}

export default ColorPicker;