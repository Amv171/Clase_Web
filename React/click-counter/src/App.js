import './App.css';
import Button from './components/button';
import Cont from './components/cont';
import { useState, useRef, useEffect } from 'react';
function App() {
  const[numClicks, setNumClicks] = useState(0);
  const handleClick = () => {
    setNumClicks(numClicks +1);
  }
  const counterRestart = () =>{
    setNumClicks(0);
  }
  const randomInit = ()=>{
    fetch('https://www.randomnumberapi.com/api/v1.0/randomnumber').then((response) => response.json()).then((numbers) => setNumClicks(numbers[0]));
  }
  const manual = useRef();
  const manualInit = () =>{
    const num = Number(manual.current.value);
    setNumClicks(num);
    manual.current.value = null;
  }
    return (
    <div className="App">
      <div className="main-container">
      <Cont
        numClicks = {numClicks}
      />
        <Button
        text = "Click"
        isClickButton = {true}
        handleClick = {handleClick}/>
        <Button
        text = "Restart"
        isClickButton = {false}
        handleClick = {counterRestart}/>
        <Button
           text="Auto"
           isClickButton={false}
           handleClick={randomInit} />
        <Button
           text="Manual"
           isClickButton={false}
           handleClick={manualInit} />
        <input 
          className="input"
          ref={manual} 
          type="text" 
          placeholder="Init number" />
      </div>
    </div>
  );
}

export default App;
