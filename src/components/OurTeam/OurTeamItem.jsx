import React, { useEffect } from "react";
import "./OurTeamItem.css";
const OurTeamItem = ({ img, job, name }) => {
  return (
    <div className="ourTeamItem__div">
      <div className="ourTeamItem__div_img_contener">
        <img src={img} />
      </div>
      <div className="ourTeamItem__div_info">
        <h4>{name}</h4>
        <p>{job}</p>
      </div>
    </div>
  );
};

export default OurTeamItem;
