import React, { Component } from "react";
import "./main.css";
import "./style.css";

export default class SignupForm extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="popup animate">
          {/* <div className="popup-img">
            <img src="/popup.jpg" />
          </div> */}
          <div className="login-form-div">
            <form className="mainform" onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Enter Your Name"
                onChange={this.handleUsername}
                className="login-field"
              />
              <input
                type="email"
                placeholder="Enter Your Email Address"
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
                type="password"
                placeholder=" Re -Enter Password"
                onChange={this.handlePassword}
                className="login-field"
              />
              <input className="btn sub f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn grow signbtn" type="submit" value="Sign Me Up" />
            </form>
            <div className="btndiv">
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
