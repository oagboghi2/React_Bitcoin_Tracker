import React, { Component } from 'react'
//import './button.css';


class CoinPrice extends Component{
  constructor(props){
    super(props)

    this.state = {
      price: null,
      selectedCurrency: null
    }
    this.fetchPrice = this.fetchPrice.bind(this)
  }


  // changeCurrency(){
  // }

fetchPrice(event) {
  console.log('value:', event.target.value);
  let cur = event.target.value
  fetch(`https://api.coindesk.com/v1/bpi/currentprice/${cur}.json`)
  .then(response => {
    if(response.ok){
      return response.json()
    }else{
      return Promise.reject('Something went wrong');
    }
  })
  .then(listData => {
    this.setState({price: listData.bpi[cur].rate, selectedCurrency: cur})
  })
  .catch(error => this.setState({error}))
}

render(){

  let priceJSX =   this.state.price ?
    <h5>Price of 1 Bitcoin is  : {this.state.selectedCurrency}{this.state.price}</h5>
    :
    null

  return (
    <div>
    <h6>Price of 1 bitcoin in USD is: {this.props.data}</h6>
      <h6>Please select a currency</h6>
      <select id = "selCurrency" onChange={this.fetchPrice}>
           <option default>Please select a currency</option>
           <option value = "CNY">Chinese Yuan</option>
           <option value = "MXN">Mexico Peso</option>
           <option value = "NGN">Nigerian Naira</option>
           <option value = "KRW">South Korean Won</option>
      </select>
      {priceJSX}
      </div>
    )
  }


}

export default CoinPrice



/*
practice code for rendering HTML

<h5>Price of the Coin: {this.props.data}</h5>
  <div className="dropdown">
    <button onClick={this.openMenu} className="dropbtn"> Dropdown</button>
    <div id="myDropdown" className="dropdown-content">
      <a href="#"> Chinese Yuan </a>
      <a href="#"> Mexico Peso </a>
      <a href="#"> Nigerian Naira </a>
      <a href="#"> South Korean Won </a>
    </div>
  </div>

  */
