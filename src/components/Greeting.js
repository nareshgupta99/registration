import React, { Component } from 'react'

export default class Greeting extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
  render() {
    return (
        <div className='container ' >

      <div className='card text-center mt-3' style={{width:"400px",height:"200px",margin:"auto"}}>
        <div style={{margin:"auto"}}>

        <h4>Welcome {this.props.name} </h4>
        <h6>Verified Your Email </h6>
        </div>
      
      
      
      </div>
        </div>
    )
  }
}
