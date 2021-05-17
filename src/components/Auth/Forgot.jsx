import React, {useState} from "react";
import {validateEmail} from "../util/util";
import logo from "../../assets/images/logo.svg";
import topShape from "../../assets/images/shapetop.png";
import bottomShape from "../../assets/images/shapebottom.png";
import illustration from "../../assets/images/illustration.png";
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


const ForgotView = ({onClick, setData}) => {
    const [isClickedNext, setIsClickedNext] = useState(false);
    const [email, setEmail] = useState("");

    const formValidate = () => {
        setIsClickedNext(true);
        if (email == "" || !validateEmail(email)) {
            return;
        }
        onClick();
    }

    return (
        <>
            <MyInput
                placehol
                required={true}
                label={"Email Address"}
                errMsg={"Please input email address!"}
                status={!isClickedNext && email.length == 0 ? "init" : (isClickedNext && (email.length == 0 || !validateEmail(email)) ? "error" : "init")}
                value={email}
                type={'email'}
                updateText={(val) => {
                    setEmail(val)
                }}/>

            <div className="form-button">
                <ColorButton
                    onClick={() => {
                        formValidate();
                    }}>
                    Send Reset Instructions
                </ColorButton>
            </div>

            <Box mt={3} className="auth-notice_1">
                <span>Return to </span>
                <Link to={"/login"}>Sign in</Link>
            </Box>
        </>
    );
};


const SignIn = () => {

    const [data, setData] = useState({});

    return (
        <div className="auth-signUp">
            <div className="hero">
                <img className="topShape" src={topShape} alt="top"/>
                <img className="bottomShape" src={bottomShape} alt="bottom"/>
                <div className="hero-content">
                    <Link to="/login">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <h1>The Web Portal</h1>
                    <img
                        className="hero-image"
                        src={illustration}
                        alt="illustration"
                    />
                </div>
            </div>
            <div>

                <div className="auth-container">
                    <div className="auth-content">
                        <form action="" className="form">
                            <h1 className="form-title">
                                Forgot Password?
                            </h1>
                            <Box mt={5} mb={3}>
                                Enter the email address you used when you joined and we’ll send you instructions to
                                reset your password.
                            </Box>
                            <ForgotView
                                setData={setData}
                                onClick={() => {
                                }}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
