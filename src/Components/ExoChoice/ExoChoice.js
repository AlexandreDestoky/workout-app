import React from "react";
import "./ExoChoice.css";
import noImage from "../../Assets/noImage.jpg"
import { useState } from "react";

export default function ExoChoice(props) {
  const [inputSet, setInputSet] = useState("");
  const testCheck = (e)=> {
    if(!inputSet || !e.target.checked) return;
    console.log(`check avec ${props.nom}`);
  }
  return (
    <div className="exoChoice">
    <div>
      <input type="checkbox" name="leg" id="leg" onChange={e => testCheck(e)} />
      <label htmlFor="leg">{props.nom}</label>
    </div>
    <div>
      <input type="number" name="nbrSet" id="nbrSet" placeholder="nbr Séries" value={inputSet} onChange={e => setInputSet(e.target.value)}/>
      <img className="exoImg" src={props.imgUrl || noImage} alt="" />
    </div>
    </div>
  );
}
