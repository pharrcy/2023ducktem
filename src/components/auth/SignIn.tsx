import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/signin", { email, password });
      alert("User signed in successfully");
      navigate("/main");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className={styles.signInWrapper}>
      <h1 className={styles.signInTitle}>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.signInButton}>
          Sign In
        </button>
      </form>
      <div className={styles.extraLinks}>
        <a href="/signup">Sign Up</a>
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
};

export default SignIn
