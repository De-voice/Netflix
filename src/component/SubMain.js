import React from "react";
import PropTypes from "prop-types";
import "../custom.css";

function SubMain({ title, description, src, src2, type, alt,children,imageMiddle,imageLast }) {
	return (
		<>
			<main className="main_view">
				<div className="view_text">
					<h1>{title}</h1>
					<h2>{description}</h2>
				</div>

				<div className={`${imageLast && "last_special"}`}>
					<video
						className={`video ${imageMiddle && "special"}`}
						autoPlay
						loop
						muted>
						<source src={src} type={type} />
					</video>
					<img className="img" src={src2} alt={alt} />
					{children}
				</div>
			</main>
		</>
	);
}

SubMain.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	src: PropTypes.string,
	src2: PropTypes.string.isRequired,
	children:PropTypes.any,
	imageMiddle:PropTypes.bool,
	imageLast:PropTypes.bool,
};

export default SubMain;
