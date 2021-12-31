import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  };
  return (
    <main>
      <div className="form">
        <input type="text" className="form-input" placeholder="Top text" />
        <input type="text" className="form-input" placeholder="Bottom text" />
        <button onClick={getMemeImage} className="form-button">
          Generate Meme
        </button>
      </div>
      <img src={memeImage} className="meme-image"/>
    </main>
  );
}
