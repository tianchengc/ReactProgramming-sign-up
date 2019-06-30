import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {createStyles } from '@material-ui/core/styles';
import { Theme, WithStyles, withStyles as styles} from '@material-ui/core';
import { ThemeProviderProps } from '@material-ui/styles/ThemeProvider';
import TextField from '@material-ui/core/TextField';


type StyleKeys = 'root' | 'menuButton' | 'title' | 'textField' | 'button' ;

const withStyles = styles<StyleKeys, {}>((theme: Theme) => 
    createStyles({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    }
    })  
);

export interface FormPersonalDeProps {
    nextStep: () => void;
    prevStep: () => void;
    handleChange: (input: React.ChangeEvent<HTMLInputElement>) => void 
    values: any; 
}
export interface FormPersonalDeBaseProps extends WithStyles<StyleKeys>, ThemeProviderProps<Theme> {
    nextStep: () => void;
    handleChange: (input: React.ChangeEvent<HTMLInputElement>) => void
    prevStep: () => void;
    values: any;
    
}
export interface FormPersonalDeState {}

export class FormPersonalDeBase extends React.PureComponent<
FormPersonalDeBaseProps & FormPersonalDeProps, 
FormPersonalDeState
> {
    
    continue = ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        this.props.nextStep();
    };

    // onInputChanged = (e:React.ChangeEvent<HTMLInputElement> ) => {
    //     const { handleChange } = this.props;
    //     if(handleChange) {
    //         handleChange(e);
    //     }
    // }

    render() {
        //pull the value out
        const { classes, theme, values, handleChange} = this.props;

        return (
               <React.Fragment>
                <AppBar position="static" color="inherit" aria-label="Menu" />
                    <Toolbar>
                        <IconButton edge="start" className = {classes.menuButton} color="inherit" aria-label = "Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant = "h6" className = {classes.title}>
                            Enter user details
                        </Typography>
                        <Button color= "inherit" onClick={this.continue}>Login</Button>
                    </Toolbar>
                    <form>
                    <TextField 
                        label = "First Name"
                        name = "firstName"
                        margin = "normal"
                        onChange= {handleChange}
                        value = {values.firstName}
                        className= {classes.textField}
                        helperText = {values.firstNameError}
                    />
                    <br/>
                    <TextField 
                        label = "Last Name"
                        name = "lastName"
                        margin = "normal"
                        onChange= {handleChange}
                        defaultValue = {values.lastName}
                        className = {classes.textField}
                        helperText = {values.lastNameError}
                    />
                    <br/>
                    <TextField 
                        label = "Email"
                        name = "email"
                        margin = "normal"
                        onChange= {handleChange}
                        defaultValue = {values.email}
                        className = {classes.textField}
                        helperText = {values.emailError}
                    />
                    <br/>
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick = {this.continue}
                        className = {classes.button}
                    >Continue
                    </Button>
                    </form>
                </React.Fragment>
        );
    }
}

 const FormPersonalDetails = withStyles(FormPersonalDeBase)
 export default FormPersonalDetails;