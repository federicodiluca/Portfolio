import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, isScrolled, isImage = false }) {
  return (
    <div style={{ width: "95%" }}>
      {isImage ?
        <p className="lead mb-1 mt-2">
          <img src={skill} alt="" />
        </p>
        :
        <p className="lead mb-1 mt-2">{skill}</p>
      }
      <ProgressBar
            className={!isScrolled ? "progress" : " progress-bar-animation"}
            now={value}
          />
    </div>
  );
}

export default SkillsBar;
