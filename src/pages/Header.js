import React from "react";
import "../custom.css";
import logo from "../assets/logo.png";

const Header = () => {
	return (
		<>
			<header className="headerComponent">
				<div className="nav_link">
					<img src={logo} alt="Netflix" />
					<a href="#!">Sign In</a>
				</div>

      {/* showcase with form */}
				<div className="showcase">
					<h1>Unlimited movies, TV </h1>
					<h1>shows, and more.</h1>
					<h3>Watch anywhere. Cancel anytime.</h3>
					<p>
						Ready to watch? Enter your email to create or restart your
						membership.
					</p>

					<div className="input-wrapper">
						<input type="email" className="inputText" required />
						<span className="placeholder">Email address</span>
						<button className="btn">
							Get Started
							<i className="fas fa-chevron-right fa-md"></i>
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
