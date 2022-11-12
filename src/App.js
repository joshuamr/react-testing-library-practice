import classes from './App.module.css';
import { useState } from 'react'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('red')
  const otherColor = backgroundColor === 'red'  ? 'blue': 'red'
  const buttonText = `Change to ${otherColor}`


  const changeButtonColor = (prevState) => {
    if (backgroundColor === 'red') {
      setBackgroundColor('blue')
      return
    }

    setBackgroundColor('red')
  }

  return (
    <div className="App">
      <button onClick={changeButtonColor} style={{backgroundColor: backgroundColor}}>{buttonText}</button>
    </div>
  );
}

export default App;
