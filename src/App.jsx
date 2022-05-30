import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import quotes from './quotes.json'

const arrayColors = [
    '#00B1B1', '#FCB034', '#DE791B', '#69321E', '#F9A25E'
]

function App() {
  const createRandomNumber = (array) => {
    return Math.floor(Math.random() * array.length);
  };
  const getElementRandom = array => {
    const i = createRandomNumber(array)
    return array[i]
  }

  const [randomQuote, setRandomQuote] = useState(getElementRandom(quotes));
  const [randomColor, setRandomColor] = useState(
    getElementRandom(arrayColors)
  );

  const shuffle = () => {
    setRandomColor(getElementRandom(arrayColors))
    setRandomQuote(getElementRandom(quotes))
  }

  return (
    <div className="App" style={{height:'100vh',width:'100vw',backgroundColor:`${randomColor}`}}>
      <QuoteBox
      randomQuote ={randomQuote}
      randomColor ={randomColor} 
      shuffle = {shuffle}
      
      />
    </div>
  );
}

export default App;
