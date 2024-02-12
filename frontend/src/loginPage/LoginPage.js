// LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./involead_logo.jpg";
import LoginPageStyles from "./loginPageStyles";
const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleLogin = () => {
    const validUsername = "Yashraj";
    const validPassword = "Yashraj@123";

    if (username === validUsername && password === validPassword) {
      setLoginStatus("Login successful!");
      navigate("/create-session");
    } else {
      setLoginStatus("Invalid username or password. Please try again.");
    }
  };

  return (
    <div style={LoginPageStyles.container}>
      <img src={logo} alt="Logo" style={LoginPageStyles.logo} />
      <div style={LoginPageStyles.formContainer}>
        <h1 style={LoginPageStyles.heading}>Login</h1>
        <div style={LoginPageStyles.form}>
          <label style={LoginPageStyles.label}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={LoginPageStyles.input}
          />
          <label style={LoginPageStyles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={LoginPageStyles.input}
          />
          <button onClick={handleLogin} style={LoginPageStyles.button}>
            Sign In
          </button>
          <p style={LoginPageStyles.status}>{loginStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
