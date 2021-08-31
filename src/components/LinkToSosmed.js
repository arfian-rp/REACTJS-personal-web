import React from "react";

function LinkToSosmed(props) {
  return (
    <div className="mt-3">
      <i className={props.icon}></i>
      <a target="_blank" rel="noopener noreferrer" href={props.url}>
        click here!
      </a>
    </div>
  );
}

export default LinkToSosmed;
