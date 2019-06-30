import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { createStyles } from '@material-ui/core/styles';
import { Theme, WithStyles, withStyles as styles, ListItemText} from '@material-ui/core';
import { ThemeProviderProps } from '@material-ui/styles/ThemeProvider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


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

export interface ConfirmProps {
    nextStep: () => void;
    prevStep: () => void;
    handleChange: (input: React.ChangeEvent<HTMLInputElement>) => void 
    values: any; 
}
export interface ConfirmBaseProps extends WithStyles<StyleKeys>, ThemeProviderProps<Theme> {
    nextStep: () => void;
    handleChange: (input: React.ChangeEvent<HTMLInputElement>) => void
    prevStep: () => void;
    values: any;
    
}
export interface ConfirmState {}

export class ConfirmBase extends React.PureComponent<
ConfirmBaseProps & ConfirmProps, 
ConfirmState
> {
    
    continue = ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
        e.preventDefault();
        this.props.prevStep();
    }

    // onInputChanged = (e:React.ChangeEvent<HTMLInputElement> ) => {
    //     const { handleChange } = this.props;
    //     if(handleChange) {
    //         handleChange(e);
    //     }
    // }

    render() {
        //we have to pull the all of the props, which will be values in order to have access to these props
        const { values, classes} = this.props;
        return (
               <React.Fragment>
                <AppBar position="static" color="inherit" aria-label="Menu" title= "Confirm User data" />
                <List>
                    <ListItem>
                        <ListItemText  
                            primary = "First Name"
                            secondary = {values.firstName}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText  
                            primary = "Last Name"
                            secondary = {values.lastName}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText  
                            primary = "Gender"
                            secondary = {values.gender}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText  
                            primary = "Email"
                            secondary = {values.Email}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText  
                            primary = "Postal Code"
                            secondary = {values.postalCode}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText  
                            primary = "Phone Number"
                            secondary = {values.phoneNumber}
                        />
                    </ListItem>

                </List>
                    <br/>
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick = {this.continue}
                        className = {classes.button}
                    >Confirm & submit
                    </Button>
                    <Button 
                        variant="contained"
                        color="default"
                        onClick = {this.back}
                        className = {classes.button}
                    >back
                    </Button>
                </React.Fragment>
        );
    }
}

 const Confirm = withStyles(ConfirmBase)
 export default Confirm;