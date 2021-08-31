import React from "react";
import CardHobby from "../../components/CardHobby";

function Hobbies(props) {
  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center mb-5">My Hobbies</h3>
        <CardHobby img="/img/hobbies/coding.jpg" title="Programing" desc="I like to make website or desktop applications, I also master several programming languages such as js, php, and others" />
        <CardHobby img="/img/hobbies/book.jpg" title="Read Book" desc="I often read books to increase my knowledge" />
        <CardHobby img="/img/hobbies/chess.jpg" title="Play Chess" desc="I like to play chess to train my brain" />
        <CardHobby img="/img/hobbies/karate.jpg" title="Karate" desc="I practice karate for sports and martial arts" />
        <CardHobby img="/img/hobbies/bersepeda.jpg" title="Bersepeda" desc="I prefer to ride a bicycle than a motorcycle" />
      </div>
    </div>
  );
}

export default Hobbies;
