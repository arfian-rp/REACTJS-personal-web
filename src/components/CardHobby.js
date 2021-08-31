import React from "react";

function CardHobby(props) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt={props.alt} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default CardHobby;
