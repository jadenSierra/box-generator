import React, { useState } from 'react'

function BoxInput(props) {
    const [color, setColor] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({color})
        props.generateBox(color);
    }

  return (
    <>
        <form onSubmit={handleSubmit}> 
            <label>Color</label>
            <input type={"text"} value={color} onChange={ (e) => setColor(e.target.value)}/>
            <input type={"submit"}/>
        </form>
    </>
  )
}

export default BoxInput