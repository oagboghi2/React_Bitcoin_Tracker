import React, { Component } from 'react'
import API from "./API"


class LoadButton extends Component{
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


  render(){
    const {data, isLoading, error} = this.state;

    if (error) {
     return <p>{error.message}</p>;
   }

    if(isLoading){
      return <p> Loading... </p>
    }

    return (
      <div>
        <h2> Price of the Bitcoin: {this.state.data}</h2>
        <button type="button" >REFRESH</button>
      </div>
    )
  }
}

export default LoadButton
