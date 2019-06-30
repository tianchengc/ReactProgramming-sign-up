import React from 'react';
import AppBar from '@material-ui/core/AppBar';


export interface SuccessProps {}
export interface SuccessBaseProps {}
export interface SuccessState {}

export class SuccessBase extends React.PureComponent<
SuccessBaseProps & SuccessProps, 
SuccessState
> {
    

    // onInputChanged = (e:React.ChangeEvent<HTMLInputElement> ) => {
    //     const { handleChange } = this.props;
    //     if(handleChange) {
    //         handleChange(e);
    //     }
    // }

    render() {
        //we have to pull the all of the props, which will be values in order to have access to these props
        return (
               <React.Fragment>
                <AppBar position="static" color="inherit" aria-label="Menu" title= "Success" />
                    <h1>Thanks for registation</h1>
                    <p>You will receive an email for further instructions</p>
                </React.Fragment>
        );
    }
}

 export default SuccessBase;