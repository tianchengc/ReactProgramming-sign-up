import React, { Component } from 'react';
import FormUserDetails from './FormPersonalDetails';
import FormPersonalDetails from './FormUserDetails';

export interface UserFormProps {}

export interface UserFormBaseProps {}

export interface UserFormState {
    step: number;
    firstName: string;
    lastName: string;
    email:string;
    gender: string;
    postalCode: string;
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

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({firstName: event.target.value});
    }
    

    render() {
        const {step} = this.state;
        const {firstName, lastName, email, gender, postalCode  } = this.state;
        const values = { firstName, lastName, email, gender, postalCode};
        switch (step) {
            case 1: 
                return (
                    <FormUserDetails
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange= {this.handleChange}
                        value = {values}
                    />
                );
            case 2:
                return ( 
                <FormPersonalDetails 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
                );
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Success</h1>
            default:
                return null
        }
    }
}

export default UserForm
