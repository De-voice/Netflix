import React,{ useState } from "react";
import "../custom.css";
import logo from "../assets/logo.png";
import Input from "../component/Input";

const Header = () => {
	const [text,setText] = useState("");

	const handleChange = (e) => {
        setText(e.target.value)
	}

	return (
		<>
			<header className="headComponent">
				{/* top layer logo and signIn */}
				<div className="nav_link">
					<img src={logo} className="logo" alt="Netflix" />
					<a className="signIn" href="#!">
						Sign In
					</a>
				</div>

				<div className="showcase">
					<div className="showCaseText">
						<h1>Unlimited movies, TV</h1>
						<h1>shows, and more.</h1>
						<h2>Watch anywhere. Cancel anytime.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>
					</div>

					<form className="emailLetter" action="">
						<Input
							type="text"
							value={text}
							name=""
							onChange={handleChange}
							placeholder="Email Address"
						/>
						{/* <span className="placeholder">Email Address</span> */}

						<i className="fas fa-chevron-right fa-md"></i>
						<Input type="submit" value="Get Started" name="" />
					</form>
				</div>
			</header>
		</>
	);
};

export default Header;
