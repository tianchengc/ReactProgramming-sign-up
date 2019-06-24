import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, createStyles } from '@material-ui/core/styles';
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

export interface FormUserDetailsProps {
    nextStep: () => void;
    prevStep: () => void;
    handleChange: (input: React.ChangeEvent<HTMLInputElement>) => void 
    values: any; 
}
export interface FormUserDetailsBaseProps extends WithStyles<StyleKeys>, ThemeProviderProps<Theme> {
    nextStep: () => void;
    handleChange: (input: React.ChangeEvent<HTMLInputElement>) => void
    prevStep: () => void;
    value: any;
    
}
export interface FormUserDetailsState {}

export class FormUserDetailsBase extends React.PureComponent<FormUserDetailsBaseProps & FormUserDetailsProps, FormUserDetailsState> {
    
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
                            Enter personal details
                        </Typography>
                        <Button color= "inherit" onClick={this.continue}>Login</Button>
                    </Toolbar>
                    <TextField 
                        label = "First Name"
                        margin = "normal"
                        //onChange= {handleChange}
                        defaultValue = {values.firstName}
                        className= {classes.textField}
                        onChange= {handleChange}
                    />
                    <br/>
                    <TextField 
                        label = "Last Name"
                        margin = "normal"
                        onChange= {handleChange}
                        defaultValue = {values.lastName}
                        className = {classes.textField}
                    />
                    <br/>
                    <TextField 
                        label = "Email"
                        margin = "normal"
                        onChange= {handleChange}
                        defaultValue = {values.Email}
                        className = {classes.textField}
                    />
                    <br/>
                    <Button 
                        variant="contained"
                        color="secondary"
                        onClick = {this.continue}
                        className = {classes.button}
                    >Continue
                    </Button>
                </React.Fragment>
        );
    }
}

 const FormUserDetails = withStyles(FormUserDetailsBase)
 export default FormUserDetails;