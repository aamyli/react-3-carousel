import React from "react";

const InfoCard = (props) => {
  return (
    <div className={props.name}>
      <div className="card">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
