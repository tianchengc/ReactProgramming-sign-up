import React, { Component, ComponentState } from 'react';
// @ts-ignore
import FormUserDetails from './FormUserDetails.tsx';
// @ts-ignore
import FormPersonalDetails from './FormPersonalDetails.tsx';
// @ts-ignore
import Confirm from './Confirm.tsx';
// @ts-ignore
import Success from './Success.tsx';

export interface UserFormProps {}

export interface UserFormBaseProps {}

export interface UserFormState {
    step: number;
    firstName: string;
    lastName: string;
    email:string;
    gender: string;
    postalCode: string;
    phoneNumber: string;
}

export class UserForm extends React.PureComponent<
    UserFormProps & UserFormBaseProps,
    UserFormState
> {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email:'',
        gender: '',
        postalCode: '',
        phoneNumber: '',
    };

    //proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
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
        const {firstName, lastName, email, gender, postalCode, phoneNumber  } = this.state;
        const values = { firstName, lastName, email, gender, postalCode, phoneNumber};
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
