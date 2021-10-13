import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <h1>Entrainement</h1>

      <div className="btnContainer">
        <Link to="/addWorkout">
          <button className="addWorkout">Ajouter un Entrainement</button>
        </Link>
      </div>

      <div className="workout">
        <h2>Mardi - Jambes</h2>
        <div className="exercice">
          <div className="imgExercice">
            <img src="https://picsum.photos/100" alt="" />
          </div>
          <div className="detail">
            <div className="descriptionExo">3 x Leg Extension</div>
            <div className="groupeMuscle">Jambes</div>
          </div>
        </div>
        <div className="exercice">
          <div className="imgExercice">
            <img src="https://picsum.photos/100" alt="" />
          </div>
          <div className="detail">
            <div className="descriptionExo">3 x Leg Extension</div>
            <div className="groupeMuscle">Jambes</div>
          </div>
        </div>
        <div className="exercice">
          <div className="imgExercice">
            <img src="https://picsum.photos/100" alt="" />
          </div>
          <div className="detail">
            <div className="descriptionExo">3 x Leg Extension</div>
            <div className="groupeMuscle">Jambes</div>
          </div>
        </div>
      </div>

      <div className="workout">
        <h2>Mercredi - Epaules</h2>
        <div className="exercice">
          <div className="imgExercice">
            <img src="https://picsum.photos/100" alt="" />
          </div>
          <div className="detail">
            <div className="descriptionExo">3 x Leg Extension</div>
            <div className="groupeMuscle">Jambes</div>
          </div>
        </div>
        <div className="exercice">
          <div className="imgExercice">
            <img src="https://picsum.photos/100" alt="" />
          </div>
          <div className="detail">
            <div className="descriptionExo">3 x Leg Extension</div>
            <div className="groupeMuscle">Jambes</div>
          </div>
        </div>
        <div className="exercice">
          <div className="imgExercice">
            <img src="https://picsum.photos/100" alt="" />
          </div>
          <div className="detail">
            <div className="descriptionExo">3 x Leg Extension</div>
            <div className="groupeMuscle">Jambes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
