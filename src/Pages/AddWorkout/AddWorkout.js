import React from "react";
import "./AddWorkout.css";
import ExoChoice from "../../Components/ExoChoice/ExoChoice";
import Loader from "../../Components/Loader/Loader";
import { useEffect, useState } from "react";

export default function AddWorkout() {
  const [exoImg, setExoImg] = useState([]);
  const [exoNom, setExoNom] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://wger.de/api/v2/exercise/?language=2&limit=240")
    // fetch("https://wger.de/api/v2/exercise/?language=2&limit=10")
      .then(response => response.json())
      .then(response => {
        setExoNom(response.results);
        response.results.forEach(el => {
          fetchImage(el.exercise_base);
        });
        setLoading(false);
      });

    const fetchImage = id => {
      fetch(`https://wger.de/api/v2/exerciseimage/?exercise_base=${id}`)
        .then(response => response.json())
        .then(response => {
          setExoImg(exoImg => [...exoImg, { id: id, img: response.results[0]?.image }]);
        });
    };
  }, []);
  return (
    <div>
      <h1>Ajouter un entrainement</h1>
      <form className="formWorkout">
        <div className="choixJour">
          <label htmlFor="jour">Jour de la semaine</label>
          <select name="jour" id="jour">
            <option value="">Choix du Jour</option>
            <option value="lundi">Lundi</option>
            <option value="mardi">Mardi</option>
            <option value="mercredi">Mercredi</option>
            <option value="jeudi">Jeudi</option>
            <option value="vendredi">Vendredi</option>
            <option value="samedi">Samedi</option>
            <option value="dimanche">Dimanche</option>
          </select>
        </div>

        <div className="nomWorkout">
          <label htmlFor="nom">Nom de l'entrainement</label>
          <input type="text" name="nom" id="nom" placeholder="Upper A" />
        </div>
        <div className="choiceList">
        {loading ? <Loader/> : 
          exoNom.map(el => (
            <ExoChoice key={el.uuid} nom={el.name} imgUrl={exoImg.find(image => image.id === el.exercise_base)?.img || ""} />
          ))}
        </div>
        <button className="addWorkout">Ajouter l'entrainement</button>
      </form>
    </div>
  );
}
