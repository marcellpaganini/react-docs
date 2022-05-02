import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {alt:"react", img: "https://th.bing.com/th/id/OIP.0ISkVVQbOiSrplSfZkpTcAAAAA?w=157&h=180&c=7&r=0&o=5&pid=1.7"}
    }
    render() {
    return (
      <div><img src={this.state.img} alt={this.state.alt} /></div>
    )
  }
}