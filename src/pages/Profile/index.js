import React from "react";
import Batas from "../../components/Batas";
import About from "./About";
import Education from "./Education";
import Hobbies from "./Hobbies";
import Myskills from "./Myskills";

function Profile(props) {
  return (
    <div className="container">
      <About />
      <Batas />
      <Hobbies />
      <Batas />
      <Education />
      <Batas />
      <Myskills />
    </div>
  );
}

export default Profile;
