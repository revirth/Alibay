import React, { Component } from "react";
import SignupForm from "./SignupForm.jsx";
import "./main.css";
import "./style.css";

export default class LoginPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false
    };
  }

  render() {
    return (
      <div className="overlay ">
        <div className="popup animate">
          {/* <div className="popup-img">
            <img src="/popup.jpg" />
          </div> */}
          <div className="login-form-div">
            <form className="mainform" onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.handleUsername}
                className="login-field"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.handlePassword}
                className="login-field"
              />
              <input
                className="btn sub f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn grow loginicon"
                type="submit"
                value="log In"
              />

              <span className="forgot-password">
                Forgot{" "}
                <a href="#" className="forgetlink">
                  password?
                </a>
              </span>
            </form>
            <div className="btndiv">
              {/* <button className="btn signup f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn grow">
                Don't have account? Create a new one!
              </button> */}
              <button
                className="btn login-btn f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn grow"
                onClick={this.props.onClose}
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
