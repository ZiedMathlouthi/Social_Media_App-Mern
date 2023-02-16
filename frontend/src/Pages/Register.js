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
            <div>
              <label>Firstname</label>
              <input type="text" />
            </div>
            <div>
              <label>Lastname</label>
              <input type="text" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" />
            </div>
            <div>
              <label>Bio</label>
              <textarea></textarea>
            </div>
            <div>
              <label>Picture</label>
              <input type="file" />
            </div>
            <div>
              <label>BirthDate</label>
              <input type="date" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
