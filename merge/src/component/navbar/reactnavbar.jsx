import React from "react";
class Links extends React.Component {
  menuToggle() {
    let menus = document.querySelector(".menus");
    if (menus.style.display === "inline-block") {
      menus.style.display = "none";
    } else {
      menus.style.display = "inline-block";
    }
  }

  render() {
    return (
      <div>
        <a href="#">NUTRITION FINE FOURCHETTE</a>
        <a href="#" onClick={this.menuToggle}>
          MENU
        </a>
        <a href="#">ORDER</a>

        <a href="#">DELIVERY</a>
        <a href="#">ABOUT</a>
        <a href="#">LOGIN</a>
        <a href="#">
          <i className="fa fa-search fa-2x" />
        </a>
      </div>
    );
  }
}

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <Links />
          </div>
        </div>
        <div className="menus" onClick={this.menuToggle}>
          <a href="#" onClick={this.menuToggle}>
            WEEKLY
          </a>
          <a href="#" onClick={this.menuToggle}>
            FITNESS
          </a>
          <a href="#" onClick={this.menuToggle}>
            COOKED
          </a>
        </div>
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

// ReactDOM.render(<Navbar />, document.getElementById("root"));
