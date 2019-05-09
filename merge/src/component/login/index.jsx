import ReactDOM from "react-dom";
import "./main.css";
import React, { Component } from "react";
import LoginPopup from "./LoginPopup.jsx";
import SignupForm from "./SignupForm.jsx";
import "./style.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { popup: false, signup: false };
  }
  closeLoginPopup = () => {
    this.setState({ popup: false });
  };
  closeSignup = () => {
    this.setState({ signup: false });
  };
  render = () => {
    return (
      <div className="maindiv">
        <div className="centered">
          <button
            className="btn login-btn f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn grow"
            onClick={() => this.setState({ popup: true })}
          >
            Login
          </button>
          <button
            className="btn login-btn f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn grow"
            onClick={() => this.setState({ signup: true })}
          >
            Sign Up
          </button>
        </div>
        {this.state.popup ? (
          <LoginPopup onClose={this.closeLoginPopup} />
        ) : null}
        {this.state.signup ? <SignupForm onClose={this.closeSignup} /> : null}
      </div>
    );
  };
}

// ReactDOM.render(<App />, document.getElementById("root"));
