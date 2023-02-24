import React from "react";

const Register = () => {
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
              <input className="input" type="text" />
            </div>
            <div className="form-group">
              <label>Lastname</label>
              <input className="input" type="text" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="input" type="email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className="input" type="password" />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea></textarea>
            </div>
            <div className="form-group">
              <label>Picture</label>
              <input className="input" type="file" />
            </div>
            <div className="form-group">
              <label>BirthDate</label>
              <input className="input" type="date" />
            </div>

            <button className="btn signup">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
