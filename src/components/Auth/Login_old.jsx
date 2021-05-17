import React from "react";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import logo from "../../assets/images/logoSignIn.svg";
import background from "../../assets/images/background2.svg";
import "./Login.css";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import CustomButton from "../InputElements/Button";
const Login_old = () => {
  return (
    <div className="login">
      <header className="header">
        <Link to={"/"} className="text-primary">
          {" "}
          <img src={logo} alt="" /> <span>LOGO</span>
        </Link>
      </header>
      <div className="login-container">
        <div className="login-hero">
          <img src={background} alt="background" />
        </div>
        <div className="login-content">
          <h2>Welcome to dashboard! 👋</h2>
          <p>Please sign-in to your account</p>
          {/* <Alert severity="info">
            <strong>Admin:</strong>
            <span>admin@demo.com | admin</span>
            <br />
            <strong>Client:</strong>
            <span>client@demo.com | client</span>
          </Alert> */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            className="checkbox-label"
          />
          <div className="form-button">
            <CustomButton fullWidth>Log in</CustomButton>
          </div>
          <p className="login-isNew">
            New Here? <Link to={"/signup"}>Create an account</Link>
          </p>
          <div className="divider">
            {/* <p className="divider-text">or</p> */}
          </div>
          {/* <div className="login-footer"> */}
            {/* <a href="https://facebook.com" className="btn btn-facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="14px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="btn btn-twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="14px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-twitter"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="https://google.com" className="btn btn-google">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="14px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a href="https://github.com" className="btn btn-github">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="14px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login_old;
