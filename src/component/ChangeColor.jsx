import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../reducers/themeReducer";

const ChangeColor = () => {
    const [color, setColor] = useState('#000000');
    const dispatch = useDispatch();
    return (
        <div>
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
            <button onClick={() => {
                dispatch(changeColor(color))
            }}>Change theme</button>
        </div>
    )
}

export default ChangeColor