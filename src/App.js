import DisplayBox from './components/DisplayBox';
import BoxInput from './components/BoxInput';
import { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState([]);

  const generateBox = (newColor) => {
    // setColor([...color, newColor]);
    console.log(newColor)
    const copyColors = [...color];
    copyColors.push(newColor);
    setColor(copyColors)
    console.log(color);
  }

  return (
    <div className="App">
      <BoxInput generateBox={generateBox}/>
      <DisplayBox color={color}/>
    </div>
  );
}

export default App;
