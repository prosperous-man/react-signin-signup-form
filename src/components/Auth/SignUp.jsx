import {Checkbox, FormControlLabel} from "@material-ui/core";
import React, {useState} from "react";

import {validateEmail} from "../util/util";
import logo from "../../assets/images/logo.svg";
import topShape from "../../assets/images/shapetop.png";
import bottomShape from "../../assets/images/shapebottom.png";
import illustration from "../../assets/images/illustration.png";
import background2 from "../../assets/images/background3.svg";
import "./SignUp.css";
import MyInput from "../InputElements/MyInput";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import purple from "@material-ui/core/colors/purple";
import Box from "@material-ui/core/Box";


const ColorButton = withStyles((theme) => ({
    root: {
        padding: "10px 30px",
        color: theme.palette.getContrastText(purple[500]),
        fontSize: 15,
        fontWeight: 600,
        textTransform: "inherit",
        fontFamily: "sans-serif",
        backgroundColor: "#5f63f2",
        '&:hover': {
            backgroundColor: "#8c94ff",
        },
    },
}))(Button);


const FirstView = ({onClick, setData}) => {
    const [isClickedNext, setIsClickedNext] = useState(false);
    const [name, setName] = useState("");
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formValidate = () => {
        setIsClickedNext(true);
        if (name == "" || username == "" || email == "" || password == "") {
            return;
        }
        if (!validateEmail(email)) return;
        onClick();
    }

    return (
        <>
            <MyInput
                placehol
                required={true}
                label={"Name"}
                errMsg={"Please input your name!"}
                status={!isClickedNext && name.length == 0 ? "init" : (isClickedNext && name.length == 0 ? "error" : "init")}
                value={name}
                type={'text'}
                updateText={(val) => {
                    setName(val)
                }}/>
            <MyInput
                required={true}
                label={"Username"}
                errMsg={"Please input your username!"}
                status={!isClickedNext && username.length == 0 ? "init" : (isClickedNext && username.length == 0 ? "error" : "init")}
                value={username}
                type={'text'}
                updateText={(val) => {
                    setusername(val)
                }}/>
            <MyInput
                required={true}
                label={"Email"}
                errMsg={"Please input your email!"}
                status={!isClickedNext && email.length == 0 ? "init" : (isClickedNext && (email.length == 0 || !validateEmail(email)) ? "error" : "init")}
                value={email}
                type={'email'}
                updateText={(val) => {
                    setEmail(val)
                }}/>
            <MyInput
                required={true}
                label={"Password"}
                errMsg={"Please input your password!"}
                status={!isClickedNext && password.length == 0 ? "init" : (isClickedNext && password.length == 0 ? "error" : "init")}
                value={password}
                type={'password'}
                updateText={(val) => {
                    setPassword(val)
                }}/>


            <FormControlLabel
                value="end"
                control={<Checkbox color="primary"/>}
                label="Creating an account means you’re okay with our Terms of Service and Privacy Policy"
                labelPlacement="end"
                // classes={classes.font15}
            />

            <div className="form-button">
                <Box mt={2}>
                    <ColorButton
                        onClick={() => {
                            formValidate();
                        }}>
                        Next
                    </ColorButton>

                </Box>
            </div>
        </>
    );
};

const SecondView = ({setData, onSignUp, onClick}) => {
    const [isClickedCreate, setIsClickedCreate] = useState(false);
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const formValidate = () => {
        setIsClickedCreate(true);
        if (address == "" || city == "" || country == "") {
            return;
        }
        onSignUp();
    }

    return (
        <>
            <MyInput
                placehol
                required={true}
                label={"Address"}
                errMsg={"Please input your address!"}
                status={!isClickedCreate && address.length == 0 ? "init" : (isClickedCreate && address.length == 0 ? "error" : "init")}
                value={address}
                type={'text'}
                updateText={(val) => {
                    setAddress(val)
                }}/>
            <MyInput
                placehol
                required={true}
                label={"City"}
                errMsg={"Please input your city!"}
                status={!isClickedCreate && city.length == 0 ? "init" : (isClickedCreate && city.length == 0 ? "error" : "init")}
                value={city}
                type={'text'}
                updateText={(val) => {
                    setCity(val)
                }}/>
            <MyInput
                placehol
                required={true}
                label={"Country"}
                errMsg={"Please input your country!"}
                status={!isClickedCreate && country.length == 0 ? "init" : (isClickedCreate && country.length == 0 ? "error" : "init")}
                value={country}
                type={'text'}
                updateText={(val) => {
                    setCountry(val)
                }}/>

            <div className="form-button">
                <Box mt={1}>
                    <ColorButton
                        onClick={() => {
                            onClick();
                        }}
                    >
                        Back
                    </ColorButton>
                    <ColorButton
                        onClick={() => {
                            formValidate();
                        }}
                    >
                        Create Account
                    </ColorButton>

                </Box>
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
                <img className="topShape" src={topShape} alt="top"/>
                <img className="bottomShape" src={bottomShape} alt="bottom"/>
                <div className="view">
                    <span className={`view-item ${(view === 1) && "active"}`}>1</span>
                    <span className={`view-item ${(view === 2) && "active"}`}>2</span>
                </div>
                <div className="hero-content">
                    <Link to="/login">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <h1>The Web Portal</h1>
                    <img
                        className="hero-image"
                        src={view === 1 ? illustration : background2}
                        alt="illustration"
                    />
                </div>
            </div>
            <div>
                <div className="auth-notice">
                    <span>Already have an account?</span>
                    <Link to={"/login"}>Sign in</Link>
                </div>
                <div className="auth-container">
                    <div className="auth-content">
                        <form action="" className="form">
                            <h1 className="form-title">
                                Sign Up to <span>Admin</span>
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
                                    onSignUp={() => {
                                    }}
                                />
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
