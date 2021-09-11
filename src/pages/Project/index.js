import React from "react";
import CardProject from "../../components/CardProject";

function Project(props) {
  return (
    <div className="container text-center">
      <h3 className="mb-5">My Project</h3>
      <div className="row">
        <CardProject img="/img/project/thissite.png" title="this website (ReactJS)" desc="I created this website with ReactJS." url="/" name="Go link" >
      </div>
    </div>
  );
}

export default Project;
