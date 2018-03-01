//import '../../style/style.css';
import React, { Component } from 'react'


class Navbar extends Component{
  constructor(props){
  super(props)
  }


  render(){
    return(
      <nav classBar="navbar navbar-default" role="navigation">
      <div classBar="container-fluid">

          <div classBar="navbar-header">
              <a classBar="navbar-brand" href="#">
                  <span classBar="glyphicon glyphicon glyphicon-tree-deciduous"></span>
                  BitCoin Wallet Tracker
              </a>

              <ul classBar="nav navbar-nav">
                  <li classBar="navbutton"><a href="/api/btc">Home</a></li>
                  <li classBar="navbutton"><a href="/login">Login</a></li>
                  <li classBar="navbutton"><a href="/about">About</a></li>
              </ul>
          </div>

      </div>
      </nav>

    )
  }
}
export default Navbar
