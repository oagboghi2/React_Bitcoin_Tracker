import React, { Component } from 'react';
import Navbar from './navbar';
import Logo from './bitcoin_logo'
import Copyright from './copyright'
import CoinPrice from './coin_price'

const API = `https://api.coindesk.com/v1/bpi/currentprice/USD.json`


 class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[],
      isLoading: false,
      error: null
    };
  }

  componentDidMount(){
    this.setState({isLoading: true})

      fetch(API)
        .then(response => {
          if(response.ok){
            return response.json()
          }else{
            throw new Error('Something went wrong')
          }
        })
        .then(data => this.setState({data: data.bpi.USD.rate, isLoading: false}))
        .catch(error => this.setState({error, isLoading: false}))
  }


  render() {
    const {data, isLoading, error} = this.state;

    if (error) {
     return <p>{error.message}</p>;
   }

    if(isLoading){
      return <p> Loading... </p>
    }

    return (
      <div>
        <Navbar />
        <Logo />
        <CoinPrice data = {this.state.data}/>
        <Copyright text="© Copyright 2018 The Awesome People" />
      </div>
    );
  }
}

export default App;
