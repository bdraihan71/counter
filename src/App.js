import React, { Component } from 'react';
import { Provider } from "react-redux";
import './App.css';
import store from './Store'
import Count from './Count';
import Control from './Control';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
       <h3>Techynaf</h3>
       <Count/>
       <Control/>
      </div>
      </Provider>
    );
  }
}

export default  App ;
