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

				<div className="showcase">
					<h1>Unlimited movies, TV shows, and more.</h1>
					<h3>Watch anywhere. Cancel anytime.</h3>
					<p>
						Ready to watch? Enter your email to create or restart your
						membership.
					</p>
					<div id='input'>
						<input type="text" placeholder="Email Address"/>
						<button className="btn">
							Get Started 
							<i class="fas fa-chevron-right fa-md"></i>
						</button>
					</div>
				</div>
				
			</header>
		</>
	);
};

export default Header;
