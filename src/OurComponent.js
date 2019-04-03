import React, { Component } from "react";
import "./OurComponent.css";
import handleSomething from './something';


class OurComponent extends Component {
  state = {
    email: "",
    password: "",
  };
  handleOnChange = event => {
    this.setState({email: event.target.value })
  };
  handleLogin = () => {
    console.log("My EMail -->", this.state.email);
    
  };
  render() {
    return (
      <div>
        <input
          placeholder="Email"
          onChange={event => this.handleOnChange(event)}
        />
        <input placeholder="Password" />
        <button onClick={handleSomething}>Login</button>
      </div>
    );
  }
}

export default OurComponent;
