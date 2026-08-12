import React from "react";

function Imgcards({ Cname, CLocation, Cimage }) {
  return (
    <div className="card">
      <img src={Cimage} alt={Cname} className="card-img" />

      <div className="card-body">
        <h3 className="card-title">{Cname}</h3>
        <p className="card-text">{CLocation}</p>
      </div>
    </div>
  );
}

export default Imgcards;

