import React from "react";
import "./reactnavbar.scss";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

import LoginPopup from "../login/LoginPopup.jsx";
import SignupForm from "../login/SignupForm.jsx";

// let Links = (props) => {

//   const loginOrProfile = (login) => {
//     // ternary operator statement ? (if true) : (if false)
//     return auth.isAuthenticated ?
//       // navbar if user is login= true
//       <div className="navbarmains">
//         <a href="/" className="titles">
//           Nutrition Fine Fourchette
//         </a>
//         <a href="#" onClick={this.menuToggle}>
//           MENU
//         </a>
//         <a href="/cart">ORDER</a>

//         <a href="#">DELIVERY</a>
//         <a href="/">ABOUT</a>
//         <a href="/">{this.props.username}</a>
//         <a href="/logout">LOGOUT</a>

//         <i id="searchbutton" className="fa fa-search fa" />
//         <input />
//       </div>

//       :

//       // navbar if user is login=false
//       <div className="navbarmains">
//         <a href="/" className="titles">
//           Nutrition Fine Fourchette
//         </a>
//         <a href="#" onClick={this.menuToggle}>
//           MENU
//         </a>
//         <a href="/cart">ORDER</a>

//         <a href="#">DELIVERY</a>
//         <a href="/">ABOUT</a>
//         <a href="/login">LOGIN</a>
//         <a href="/login">SIGNUP</a>
//         <i id="searchbutton" className="fa fa-search fa" />
//         <input />
//       </div>
//   };

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = { popup: false, signup: false, loggedIn: false };
  }
  closeLoginPopup = loggedIn => {
    this.setState({ popup: false, loggedIn: loggedIn });
  };
  closeSignup = () => {
    this.setState({ signup: false });
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username : "" ,
  //     login : false
  //   }
  // }

  menuToggle() {
    let menus = document.querySelector(".menus");
    if (menus.style.display === "inline-block") {
      menus.style.display = "none";
    } else {
      menus.style.display = "inline-block";
    }
  }

  logout = () => {
    fetch("/logout")
      .then(res => res.json())
      .then(res => {
        if (res.status) {
          this.setState({ loggedIn: false });
        }
      });
  };

  render() {
    return (
      <div className="navbarmains">
        <a href="/" className="titles">
          Nutrition Fine Fourchette
        </a>
        <a href="#" onClick={this.menuToggle}>
          MENU
        </a>
        <a href="/cart">ORDER</a>
        <a href="#">DELIVERY</a>
        <a href="/">ABOUT</a>
        {!this.state.loggedIn ? (
          <span>
            <a href="#" onClick={() => this.setState({ popup: true })}>
              LOGIN
            </a>
            <a href="#" onClick={() => this.setState({ signup: true })}>
              SIGNUP
            </a>
          </span>
        ) : (
          <span>
            <a href="#" onClick={this.logout}>
              LOGOUT
            </a>
          </span>
        )}

        <i id="searchbutton" className="fa fa-search fa" />
        <input />

        {this.state.popup ? (
          <LoginPopup onClose={this.closeLoginPopup} />
        ) : null}
        {this.state.signup ? <SignupForm onClose={this.closeSignup} /> : null}
      </div>
    );
  }
}

// let mapStateToProps = {
//   return {
//     username : state.username,
//     login : state.login
//   }
// };

// let Link = connect(mapStateToProps)(UnconnectedLinks)

export default class Navbar extends React.Component {
  render() {
    return (
      //main navbar selectors + links component based on if user is log or no
      <nav className="fixednav">
        <div className="navWide">
          <div className="wideDiv">
            {/* {loginOrProfile(props.login)} */}
            <Links />
          </div>
        </div>

        <Fade top>
          <div className="menus" onClick={this.menuToggle}>
            <a href="/items" onClick={this.menuToggle} onClick={this.toggle}>
              WEEKLY
            </a>
            <a href="/items" onClick={this.menuToggle} onClick={this.toggle}>
              FITNESS
            </a>
            <a href="/items" onClick={this.menuToggle} onClick={this.toggle}>
              COOKED
            </a>
          </div>
        </Fade>
        <div className="navNarrow" onClick={this.toggle}>
          <span>
            {" "}
            <i className="fas fa-hamburger fa-2x" />
          </span>

          <i className="fa fa-bars fa-2x" />
          <div className="narrowLinks hidden">
            <Links />
          </div>
        </div>
      </nav>
    );
  }

  toggle() {
    let narrowLinks = document.querySelector(".narrowLinks");
    narrowLinks.classList.toggle("hidden");
  }
  menuToggle() {
    let menus = document.querySelector(".menus");
    if (menus.style.display === "inline-block") {
      menus.style.display = "none";
    } else {
      menus.style.display = "inline-block";
    }
  }
}
