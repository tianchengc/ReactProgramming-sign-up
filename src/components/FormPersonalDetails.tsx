import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles } from '@material-ui/core/styles';
import { Theme, WithStyles, withStyles as styles} from '@material-ui/core';
import { ThemeProviderProps } from '@material-ui/styles/ThemeProvider';
import TextField from '@material-ui/core/TextField';
import RadioGroup  from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

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
        marginLeft: theme.spacing(2),
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
    handleChange: (input: React.ChangeEvent<HTMLInputElement>) => void, 
    handleRadioGroupChange: ((event: React.ChangeEvent<{}>, value: string) => void) | undefined,
    values: any; 
}
export interface FormUserDetailsBaseProps extends WithStyles<StyleKeys>, ThemeProviderProps<Theme> {
    handleChange: (input: React.ChangeEvent<HTMLInputElement>) => void, 
    nextStep: () => void;
    prevStep: () => void;
    handleRadioGroupChange: ((event: React.ChangeEvent<{}>, value: string) => void) | undefined,
    values: any;
    
}
export interface FormUserDetailsState {}

export class FormUserDetailsBase extends React.PureComponent<FormUserDetailsBaseProps & FormUserDetailsProps, FormUserDetailsState> {
    
    continue = ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        this.props.prevStep();
    };

    // onInputChanged = (e:React.ChangeEvent<HTMLInputElement> ) => {
    //     const { handleChange } = this.props;
    //     if(handleChange) {
    //         handleChange(e);
    //     }
    // }

    render() {
        //pull the value out
        const { classes, theme, values, handleChange, handleRadioGroupChange} = this.props;

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
                    <br/>
                    <TextField 
                        label = "Postal Code"
                        name = "postalCode"
                        margin = "normal"
                        onChange= {handleChange}
                        defaultValue = {values.postalCode}
                        className = {classes.textField}
                    />
                    <br/>
                    <TextField 
                        label = "Phone Number"
                        name = "phoneNumber"
                        margin = "normal"
                        onChange= {handleChange}
                        defaultValue = {values.phoneNumber}
                        className = {classes.textField}
                    />
                    <br/>
                    {/* <label>
                    <br/>
                    <Radio 
                        value="female"
                        checked={values.gender === 'female'} 
                        onChange = {handleChange}
                        name = "gender"/>Female
                    </label>
                    
                    <label>
                    <Radio 
                        value="male" 
                        checked={values.gender === 'male'} 
                        onChange = {handleChange}
                        name = "gender"/>Male
                    </label>
                    <label>
                    <Radio 
                        value="other"
                        checked = {values.gender==='other'}
                        onChange = {handleChange}
                        name = "gender" />Other
                    </label> */}
                    <RadioGroup
                        name="gender"
                        value= {values.gender}
                        onChange={handleRadioGroupChange}>
                        <label>
                            <Radio value="female" />Female
                            </label>
                            <label>
                            <Radio value="male" />Male
                            </label>
                            <label>
                            <Radio value="other" />Other
                        </label>
                    </RadioGroup>
                    <br/>
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick = {this.continue}
                        className = {classes.button}
                    >Continue
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

 const FormUserDetails = withStyles(FormUserDetailsBase)
 export default FormUserDetails;