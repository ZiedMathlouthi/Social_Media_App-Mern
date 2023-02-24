import React, { useState } from "react";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [picture, setPicture] = useState("");

  return (
    <div className="register">
      <div className="register-cover"></div>
      <div className="register-content">
        <div>
          <h1> DARK SPACE</h1>
          <p> Dark Space Social Media Application</p>
        </div>

        <div>
          <form>
            <div className="form-group">
              <label>Firstname</label>
              <input
                className="input"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Lastname</label>
              <input
                className="input"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Picture</label>
              <input className="input" type="file" />
            </div>
            <div className="form-group">
              <label>BirthDate</label>
              <input
                className="input"
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>

            <button className="btn signup">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
