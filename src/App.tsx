import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProviderProps } from '@material-ui/styles/ThemeProvider';
import { Theme } from '@material-ui/core';

export interface AppProps {}

export interface AppBaseProps extends ThemeProviderProps<Theme> {}

export interface AppState {}

class App extends React.PureComponent<
AppProps & AppBaseProps , 
AppState
>{
  render(){
const { theme } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <UserForm />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
