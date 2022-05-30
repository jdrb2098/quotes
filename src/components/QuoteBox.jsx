import React from "react";
import QuoteBoxContent from "./QuoteBoxContent";

function QuoteBox({ randomQuote, randomColor, shuffle }) {
  console.log(randomQuote);
  return (
    <div className="quoteBox">
      <div className="row center">
        <i className="fa-solid fa-quote-left" style={{color:`${randomColor}`}}></i>
        <p style={{color:`${randomColor}`}}>{randomQuote.quote}</p>
      </div>
      <QuoteBoxContent randomColor={randomColor} randomQuote={randomQuote} shuffle = {shuffle} />
    </div>
  );
}

export default QuoteBox;
