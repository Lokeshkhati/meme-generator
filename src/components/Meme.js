import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  // const [memeImage, setMemeImage] = useState("");

  // const getMemeImage = () => {
  //   const memesArray = memesData.data.memes;
  //   const randomNumber = Math.floor(Math.random() * memesArray.length);
  //   setMemeImage(memesArray[randomNumber].url);
  // };
  const [counter, setCounter] = useState("0");

  function handleDecrement() {
    setCounter(counter-1);
  }
  function handleIncrement() {
    setCounter(counter+1);
  }

  return (
    <main>
      {/* <div className="form">
        <input type="text" className="form-input" placeholder="Top text" />
        <input type="text" className="form-input" placeholder="Bottom text" />
        <button onClick={getMemeImage} className="form-button">
          Generate Meme
        </button>
      </div>
      <img src={memeImage} className="meme-image"/> */}
      {/* <h1 style = {{color:'red'}}>Is State Important to know?</h1>
      <div  style = {{height:"80px",width:"80px",backgroundColor:"black", borderRadius:"50%",display:'inline-block', marginLeft:"130px"}} onClick={handleClick}>
        <h2  style = {{textAlign:"center",color:'white' }}>{result}</h2>
      </div> */}

      <div className="counter">
        <button className="counter--minus" onClick={handleDecrement}>
          –
        </button>
        <div className="counter--count">
          <h1>{counter} </h1>
        </div>
        <button className="counter--plus" onClick={handleIncrement}>
          +
        </button>
      </div>
    </main>
  );
}
