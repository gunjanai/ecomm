import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../css/Login.css";
import { auth } from "../firebase";
const imgPath = process.env.PUBLIC_URL;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login-image" src={`${imgPath}/logoipsum-logo-38.svg`} />
      </Link>

      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          >
            {console.log(email)}
          </input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button type="submit" className="login-sign-button" onClick={signIn}>
            Sign In
          </button>
          <p>Dont have an account?</p>
          <button className="login-register-button" onClick={register}>
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
