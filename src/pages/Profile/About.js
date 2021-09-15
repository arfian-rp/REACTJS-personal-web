import React from "react";
import LinkToSosmed from "../../components/LinkToSosmed";

function About(props) {
  return (
    <div className="about">
      <div className="text-center">
        <h4>About Me</h4>
        <p>
          My name is Arfian Pradana from Surabaya.
          <br />I was born in Oslo on January 14, 2007.
        </p>
        <LinkToSosmed icon="bi bi-instagram me-5" url="https://instagram.com/arfian_rp_" />
        <LinkToSosmed icon="bi bi-twitter me-5" url="https://twitter.com/ArfianRp" />
        <LinkToSosmed icon="bi bi-github me-5" url="https://github.com/arfian-rp" />
      </div>
    </div>
  );
}

export default About;
