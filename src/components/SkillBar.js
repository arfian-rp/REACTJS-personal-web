import React from "react";

function SkillBar(props) {
  return (
    <div className="mb-3 one">
      <p className="">{props.name}</p>
      <div className="container-skill">
        <div className="skills html color-skill" style={{ width: `${props.value}%` }}>
          {props.value}%
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
