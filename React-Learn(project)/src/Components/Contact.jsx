import React, { useState } from "react";

//___ CSS ___//
import "../assets/css/ContactForm.css";

const Contact = () => {
  const [name, setName] = useState("Shovon");
  const [email, setEmail] = useState("Shovon@gmail.com");
  const [password, setPassword] = useState("sho123");

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <>
      <section className="container">
        <form className="contactForm">
          <div className="contactFormBox">
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
              Contact
            </h1>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Enter your password"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="inputBox">
              <button type="submit" className="button">
                Send
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
