import React from "react";

function CardProject(props) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt={props.alt} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a href={props.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-2">
            {props.name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
