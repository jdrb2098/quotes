import React from 'react'



function QuoteBoxContent({ randomQuote, randomColor, shuffle }) {
    

  return (
    
    <div className='row center gap' >
        <h3 style={{color:`${randomColor}`}}>{randomQuote.author}</h3>
        <button onClick={shuffle} style={{backgroundColor:`${randomColor}`}}>
        <i className="fa-solid fa-arrow-rotate-left"></i>
        </button>
    </div>
  )
}

export default QuoteBoxContent