import React from "react";
import "./CSS/LoginSignUp.css";
export const LoginSignUp = () => {
  return (
    <div className="loginSignUp">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
