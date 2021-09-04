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
      <SkillBar name="PHP" value="85" />
      <SkillBar name="Java" value="75" />
      <SkillBar name="ExpressJS" value="80" />
      <SkillBar name="ReactJS" value="60" />
      <SkillBar name="RecoilJS" value="90" />
      <SkillBar name="Mysql DB" value="60" />
      <SkillBar name="Mongoose DB" value="60" />
      <SkillBar name="JQuery" value="80" />
      <SkillBar name="Bootstrap" value="70" />
      <SkillBar name="VueJS" value="60" />
      <SkillBar name="Codeigniter" value="40" />
    </div>
  );
}

export default Myskills;
