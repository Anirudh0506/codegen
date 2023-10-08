import React, { useEffect, useState } from 'react'
import './App.css';
const Quote = () => {
    const [quotes,setQuotes]= useState([])
    const [quote,setQuote]=useState(null)

    useEffect(()=>{
        fetch("https://type.fit/api/quotes")
        .then((res)=>res.json())
        .then((json)=>{
            setQuotes(json)
            setQuote(json[0])
        })

    },[])

    function getRandomQuote(){
        return quotes[Math.floor(Math.random()*quotes.length)]
    }

    function getNewQuote(){
        setQuote(getRandomQuote(quotes))
    }    

    






  return (
    <div>
        <main>
            <h1> Project Quote Generator</h1>
            <section>
                <button onClick={getNewQuote}> New quote</button>
                <h3>
                    {quote?.text}
                </h3>
                <i>-{quote?.author}</i>
            </section>
        </main>

    </div>
  )
}

export default Quote