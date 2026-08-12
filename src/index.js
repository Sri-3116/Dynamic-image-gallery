import React from "react";
import ReactDOM from "react-dom/client";
import Imgcards from "./components/imgcard";
import Spot from "./components/data";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div className="gallery-title">
      <h1>Northern Lights</h1>
    </div>

    <div className="gallery-container">
      {Spot.map((i) => {
        return (
          <Imgcards key={i.id} Cname={i.place} CLocation={i.Location} Cimage={i.image}
          />
        );
      })}
    </div>
  </>
);
