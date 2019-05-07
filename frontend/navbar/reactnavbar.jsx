
import React from "react"

const Navbar = React.createClass({

	// render function for mainnavbar
	render: function () {
		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<a className="leftnav" href="#">LOGO</a>
						<a className="leftnav" href="#">NUTRITION FINE            FOURCHETTE</a>
						<a className="links" href="#" onClick={this.menuToggle}>MENU</a>
						<a className="links" href="#">ORDER</a>
						<a className="links" href="#">DELIVERY</a>
						<a className="links" href="#">ABOUT</a>
						<a className="links" href="#">LOGIN</a>
						<a className="links" href="#">
							<i className="fa fa-search fa-2x"></i>
						</a>

					</div>
				</div>

				<div className="navNarrow">
					<p>LOGO</p>
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<a href="#" onClick={this.burgerToggle}>MENU</a>
						<a href="#" onClick={this.burgerToggle}>ORDER</a>
						<a href="#" onClick={this.burgerToggle}>LOGIN</a>
						<a href="#" onClick={this.burgerToggle}>SEARCH</a>
					</div>
				</div>
				<div className="menus">
					<a href="#" onClick={this.menuToggle}>WEEKLY</a>
					<a href="#" onClick={this.menuToggle}>FITNESS</a>
					<a href="#" onClick={this.menuToggle}>COOKED</a>
				</div>
			</nav>
		);
	},
	burgerToggle: function () {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	},
	menuToggle: function () {
		let menus = document.querySelector('.menus');
		if (menus.style.display === 'inline-block') {
			menus.style.display = 'none';
		} else {
			menus.style.display = 'inline-block';
		}
	}
});

export default Navbar