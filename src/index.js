import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import OurComponent from "./OurComponent";

class Header extends Component {
  render() {
    return (
      <div>
        <OurComponent />
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));
