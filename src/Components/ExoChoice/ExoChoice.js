import React from "react";
import "./ExoChoice.css";
import noImage from "../../Assets/noImage.jpg"

export default function ExoChoice(props) {
  return (
    <div className="exoChoice">
    <div>
      <input type="checkbox" name="leg" id="leg" />
      <label htmlFor="leg">{props.nom}</label>
    </div>
    <div>
      <input type="number" name="nbrSet" id="nbrSet" placeholder="nbr Séries" />
      <img className="exoImg" src={props.imgUrl || noImage} alt="" />
    </div>
    </div>
  );
}
