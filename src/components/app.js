import React, { Component } from 'react';
import Navbar from './navbar';
import Logo from './bitcoin_logo'
import Copyright from './copyright'
import LoadButton from './bitcoin_button'


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Logo />
        <LoadButton />
        <Copyright text="© Copyright 2018 The Awesome People" />
      </div>
    );
  }
}
