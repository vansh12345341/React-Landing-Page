import React from "react";
import "./RoadMapItem.css";
const RoadMapItem = ({ title }) => {
  return (
    <div className="roadMapItem">
      <div>
        <h3>{title}</h3>
        <p>
          Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat
          Placeat, Adipisicing Elit. At Repellat Placeat.
        </p>
      </div>
    </div>
  );
};

export default RoadMapItem;
