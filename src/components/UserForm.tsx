import React, {ComponentState } from 'react';
// @ts-ignore
import FormUserDetails from './FormUserDetails.tsx';
// @ts-ignore
import FormPersonalDetails from './FormPersonalDetails.tsx';
// @ts-ignore
import Confirm from './Confirm.tsx';
// @ts-ignore
import Success from './Success.tsx';
// const formValid = (errors : object) =>{
//     let valid = true;
//     Object.values(errors).forEach(val => val.length > 0 && (valid =false)); 
//     return valid;
//     };
// const emailValid = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

export interface UserFormProps {}

export interface UserFormBaseProps {}

export interface UserFormState {
    step: number;
    firstName: string;
    firstNameError: string;
    lastName: string;
    lastNameError: string;
    email:string;
    emailError: string;
    gender: string;
    genderError: string;
    postalCode: string;
    postalCodeError: string;
    phoneNumber: string;
    phoneNumberError: string;
}

export class UserForm extends React.PureComponent<
    UserFormProps & UserFormBaseProps,
    UserFormState
> {
    constructor(props: any){
        super(props);
        this.state = {
            step: 1,
            firstName: '',
            firstNameError:'',
            lastName: '',
            lastNameError: '',
            email:'',
            emailError: '',
            gender: '',
            genderError: '',
            postalCode: '',
            postalCodeError: '',
            phoneNumber: '',
            phoneNumberError:'',
        }
    };

    validate = () => {
        let isError = false;
        const check = this.state
        const errors = {
            firstNameError:'',
            lastNameError: '',
            emailError: '',
            genderError: '',
            postalCodeError: '',
            phoneNumberError:'',
        };

        if(check.firstName.length===0){
            console.log(check.firstName.length)
            isError = true;
            console.log(isError)
            errors.firstNameError = "First name cannot be empaty"
            debugger;
        };

        if(check.lastName.length===0){
            isError = true;
            errors.lastNameError = "Last name cannot be empaty"
        };

        if(check.email.indexOf("@")===-1){
            isError = true;
            errors.emailError = "Require an valid email"
        }

        this.setState({
            ...this.state,
            ...errors
        })
        return isError;
    }

    //proceed to next step
    nextStep = () => {
        const err = this.validate();
        if(!err){
            this.setState({
                firstName: "",
                firstNameError: "",
                lastName: "",
                lastNameError: "",
                email: "",
                emailError: "",
                gender: '',
                genderError: '',
                postalCode: '',
                postalCodeError: '',
                phoneNumber: '',
                phoneNumberError:'',
              });
              const {step} = this.state;
              this.setState({
                  step: step + 1
              });
        };

    };

    //go back to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    };

    // handle fields change
    // handleChange = input => e => {
    //     this.setState({[input]: e.target.value});
    // };
    handleRadioGroupChange = (event: React.ChangeEvent<{}>, value: string): void =>{
        this.setState({gender: value});
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // const value = event.target.value;
        // const name = event.target.name;
        const {target: {name, value} } = event;
        this.setState({[name]: value} as ComponentState);
    }
    

    render() {
        const {step} = this.state;
        const {firstName, lastName, email, gender, postalCode, phoneNumber, firstNameError  } = this.state;
        const values = { firstName, lastName, email, gender, postalCode, phoneNumber, firstNameError};
        switch (step) {
            case 1: 
                return (
                    <FormUserDetails
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange= {this.handleChange}
                        values = {values}
                    />
                );
            case 2:
                return ( 
                <FormPersonalDetails 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values={values}
                />
                );
            case 3:
                return (
                    <Confirm
                        values={values}
                        prevStep = {this.prevStep}    
                        nextStep = {this.nextStep}             
                    />
                )
            case 4:
                return (
                    <Success
                        
                    />
                )
            default:
                return null
        }
    }
}

export default UserForm
