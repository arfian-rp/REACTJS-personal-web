import axios from "axios";
import React, { useState } from "react";

function Contact(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const URL = "https://concact-me-api-arp.herokuapp.com/personal-site";

  const subHandl = (e) => {
    e.preventDefault();
    const data = {
      email,
      name,
      message,
    };
    axios({
      method: "post",
      url: URL,
      data: data,
    })
      .then(() => {
        document.querySelector(".err").innerHTML = "";
        setEmail("");
        setName("");
        setMessage("");
      })
      .catch(() => {
        document.querySelector(".err").innerHTML = '<p class="text-danger">Gagal, lengkapi form!</p>';
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <form onSubmit={subHandl}>
            <div className="card">
              <div className="card-header text-center">
                <h3>Contact</h3>
                <div className="err"></div>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                    id="name"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                    className="form-control"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Send!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
