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



  const [contact,setContact]= useState({
    firstName:'Lokesh',
    lastName:'Khati',
    phone : '7466065001',
    email : 'lokeshkhati005@gmailcom',
    isFavorite: false
   })

   let feeling = contact.isFavorite? 'Love': 'Hate'

   function toggleFavorite(){

   setContact((prevContact)=>{
     return {
       ...prevContact,
       isFavorite: !prevContact.isFavorite
     }
   })
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
      
     

      <article className="card">
        <h1>This is an image</h1>
        <div className="card--info">
          <h3 onClick={toggleFavorite} >{feeling}</h3>
        
          <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
          <p className="card--contact">{contact.phone} </p>
          <p className="card--contact">{contact.email} </p>
        </div>
      </article>
    </main>
  );
}
