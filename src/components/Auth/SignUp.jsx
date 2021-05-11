import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import React, { useState } from "react";
import CustomButton from "../InputElements/Button";

import logo from "../../assets/images/logo.svg";
import topShape from "../../assets/images/shapetop.png";
import bottomShape from "../../assets/images/shapebottom.png";
import illustration from "../../assets/images/illustration.png";
import background2 from "../../assets/images/background3.svg";
import "./SignUp.css";
import { Link } from "react-router-dom";

const FirstView = ({ onClick, setData }) => {
  return (
    <>
      <TextField
        label="Name"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Username"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email Address"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Create a new account means you're okay with ours Terms of Service and Privacy Policy"
        className="checkbox-label"
      />
      <div className="form-button">
        <CustomButton
          onClick={() => {
            onClick();
          }}
        >
          Next
        </CustomButton>
      </div>
    </>
  );
};

const SecondView = ({ setData, onSignUp, onClick }) => {
  return (
    <>
      <TextField
        label="Address"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="City"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Country"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <div className="form-button">
        <CustomButton
          onClick={() => {
            onClick();
          }}
        >
          Back
        </CustomButton>
        <div className="form-button">
          <CustomButton
            onClick={() => {
              onSignUp();
            }}
          >
            Create Account
          </CustomButton>
        </div>
      </div>
    </>
  );
};

const SignUp = () => {
  const [data, setData] = useState({});
  const [view, setView] = useState(1);
  console.log(data)
  return (
    <div className="auth-signUp">
      <div className="hero">
        <img className="topShape" src={topShape} alt="top" />
        <img className="bottomShape" src={bottomShape} alt="bottom" />
        <div className="view">
          <span className={`view-item ${(view === 1) && "active"}`}>1</span>
          <span className={`view-item ${(view === 2) && "active"}`}>2</span>
        </div>
        <div className="hero-content">
          <Link to="/login">
            <img src={logo} alt="logo" />
          </Link>
          <h1>The  Web Portal</h1>
          <img
            className="hero-image"
            src={view === 1 ? illustration : background2}
            alt="illustration"
          />
        </div>
      </div>
      <div className="auth-container">
        <p className="auth-notice">
          <span>Already have an account?</span>
          <Link to={"/login"}>Sign in</Link>
        </p>
        <div className="auth-content">
          <form action="" className="form">
            <h1 className="form-title">
              Student <span>signup</span>
            </h1>
            {view === 1 && (
              <FirstView
                setData={setData}
                onClick={() => {
                  setView(2);
                }}
              />
            )}
            {view === 2 && (
              <SecondView
                setData={setData}
                onClick={() => {
                  setView(1);
                }}
                onSignUp={() => {}}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
