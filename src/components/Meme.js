import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  // const [memeImage, setMemeImage] = useState("");

  // const getMemeImage = () => {
  //   const memesArray = memesData.data.memes;
  //   const randomNumber = Math.floor(Math.random() * memesArray.length);
  //   setMemeImage(memesArray[randomNumber].url);
  // };

  // const [isGoingOut, setIsGoingOut] = useState(false                                          );

  // function handleClick() {
  //   setIsGoingOut((prevState) => !prevState);
  // }

  const [thingsArray,setThingsArray] =useState(['Thing 1', 'Thing 2'])


function addItem(){
  setThingsArray((prevState)=>{
    return [...prevState, `Thing ${prevState.length+1}`]

  })
}


  const thingsElement= thingsArray.map((thing)=>{
    return <p>{thing} </p>
  })

  

  
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

      {/* <div className="rounded" onClick={handleClick}>
        <h1>{isGoingOut? "Yes": 'No'} </h1>
      </div> */}

      {/* <div>
        <button onClick={addItem} >Add Item</button>
        {thingsElement}
      </div> */}

<article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/star-empty.png`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        John Doe
                    </h2>
                    <p className="card--contact">+1 (719) 555-1212</p>
                    <p className="card--contact">itsmyrealname@example.com</p>
                </div>
                
            </article>
    </main>
  );
}
