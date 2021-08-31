import React from "react";
import EducationTr from "../../components/EducationTr";

function Education(props) {
  return (
    <div className="about">
      <div className="text-center">
        <h3>My Education</h3>
        <br />
        <table className="table">
          <tbody>
            <EducationTr one="2019 - now" two="Junior High School / SMPN 1 Surabaya" />
            <EducationTr one="2013 - 2019" two="Elementary School / SDN Kaliasin 1 Surabaya" />
          </tbody>
        </table>
      </div>
      <br />
    </div>
  );
}

export default Education;
