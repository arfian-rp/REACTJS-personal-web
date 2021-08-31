import React from "react";
import CardProject from "../../components/CardProject";

function Project(props) {
  return (
    <div className="container text-center">
      <h3 className="mb-5">My Project</h3>
      <div className="row">
        <CardProject img="/img/project/thissite.png" title="this website (ReactJS)" desc="I created this website with ReactJS." url="/" name="Go link" />
        <CardProject img="/img/project/myquran1.png" title="myquran web (CI4)" desc="Built with codeigniter 4." url="http://myquran.rf.gd" name="Go link" />
        <CardProject img="/img/project/myquran2.png" title="myquran web (ReactJS)" desc="Built with ReactJS." url="http://myquran.rf.gd" name="Go link" />
        <CardProject img="/img/project/chatapp.png" title="chat app (MERN)" desc="Built with Mongoose, ExpressJS, ReactJS, Nodejs." url="https://chat-ar1.web.app" name="Go link" />
        <CardProject img="/img/project/absentool.png" title="absen tool (Express)" desc="Built with ExpressJS, EJS, Nodejs." url="https://absensi-kelas.herokuapp.com/" name="Go link" />
        <CardProject img="/img/project/javagui.png" title="simple inventory app (Java)" desc="Built with java, mysql." url="/img/project/javagui.png" name="see" />
        <CardProject img="/img/project/enc.png" title="encrypt file tool (PHP)" desc="Built with PHP." url="/img/project/enc.png" name="see" />
        <CardProject img="/img/project/simplequizapp.png" title="simple quiz app (ExpressJS)" desc="Built with ExpressJS, EJS, Nodejs." url="/img/project/simplequizapp.png" name="see" />
        <CardProject img="/img/project/transferfile.png" title="transfer file to laptop tool (PHP)" desc="Built with PHP." url="/img/project/transferfile.png" name="see" />
      </div>
    </div>
  );
}

export default Project;
