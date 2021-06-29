import React from "react";
import './css/Main.css';

const UniversityCard = (props) => {
  return (
    <div className="card" >
      <div className="card-image" >
        <img className="image" src={props.img} alt="Boston University"  />
      </div>
      <div className="card-body">
        <h3 class="heading">{props.text}</h3>
      </div>
    </div>
  );
};

export default UniversityCard;
