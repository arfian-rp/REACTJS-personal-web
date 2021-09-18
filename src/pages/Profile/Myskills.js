import React from "react";
import SkillBar from "../../components/SkillBar";
import "./style/MySkills.css";

function Myskills(props) {
  return (
    <div className="myskills">
      <h4 className="text-center">My Skills</h4>
      <br />
      <SkillBar name="HTML" value="92" />
      <SkillBar name="Javascript & Nodejs" value="90" />
      <SkillBar name="CSS" value="85" />
    </div>
  );
}

export default Myskills;
