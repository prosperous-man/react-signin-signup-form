import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {fade, OutlinedInput} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
    textRed: {
        color: "red",
    },
    textError: {
        fontFamily: '"Inter" sans-serif',
        color: "red",
        fontSize: 14,
    },
    labelitem: {
        fontFamily: '"Inter" sans-serif',
        color: "#484747",
        fontSize: 15,
        fontWeight: 500
    },
    height100: {
        height: 40
    },
    "@media (max-width: 596px)": {}

}));

const useStylesInit = makeStyles((theme) => ({
    root: {
        border: "1px solid #bfbfbf",
        overflow: 'hidden',
        borderRadius: 4,
        padding: "7px 11px",
        backgroundColor: '#fff',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff',
            borderColor: theme.palette.primary.main,
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
    focused: {},
}));
const useStylesError = makeStyles((theme) => ({
    root: {
        border: "1px solid red",
        padding: "7px 11px",
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#fff',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
    focused: {},
}));

function RedditTextField(props) {
    var g_classes = useStyles();
    var classes = null;
    const classes_init = useStylesInit();
    const classes_error = useStylesError();

    switch (props.status) {

        case "init":
            classes = classes_init;
            break;
        case "error":
            classes = classes_error;
            break;
        default:
            classes = classes_init;
            break;
    }

    return (
        <FormControl variant="outlined" fullWidth={true} margin={"dense"}>
            <InputLabel
                style={{paddingTop: 3}}
                error={props.status == "error" ? true : false}
                htmlFor={"outlined-adornment-" + props.label_mark}>{props.label} </InputLabel>
            <OutlinedInput
                id={"outlined-adornment-" + props.label_mark}
                {...props}
                fullWidth={true}
                classes={g_classes.height100}
                style={{
                    height: 50,
                }}
            />
        </FormControl>
    )

}


export default function MyInput(props) {
    //state....
    const globalClass = useStyles();
    const classes_init = useStylesInit();
    const classes_error = useStylesError();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box mb={3}>
            {/*<div>{props.required ?*/}
            {/*    <span className={globalClass.textRed}>*/}
            {/*    **/}
            {/*    </span> : ""}*/}
            {/*    &nbsp;*/}
            {/*    <span className={globalClass.labelitem}>{props.label}</span>*/}
            {/*</div>*/}
            <RedditTextField
                error={props.status == "error" ? true : false}
                required={props.required}
                label_mark={props.label}
                label={props.label + " " + (props.required ? "*" : "")}
                onChange={(e) => props.updateText(e.target.value)}
                value={props.value}
                status={props.status}
                type={props.type == "password" && !showPassword ? "password" : "text"}
                size={"small"}
                endAdornment={
                    props.type == "password" ?
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment> : ""
                }
            />
            <div className={globalClass.textError}>{props.status == "error" ? props.errMsg : ""}</div>
        </Box>
    )
}

