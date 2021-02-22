import React from "react";
import PropTypes from "prop-types";
import "../custom.css";

function SubMain({ title, description, src, src2, type, rtl }) {
	return (
		<div className="content">
			<div style={rtl && { order: 1 }}>
				<h1 className={rtl && "textred"}>{title}</h1>
				<h3 className={rtl && "textred"}>{description}</h3>
			</div>

			<div className="bg-img">
				<div>
					<img src={src2} alt="" />
				</div>
				<video autoPlay loop muted>
					<source src={src} type={type} />
				</video>
			</div>
		</div>
	);
}

SubMain.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	src: PropTypes.string,
	src2: PropTypes.string.isRequired,
	type: PropTypes.string,
	rtl: PropTypes.bool 
};
export default SubMain;
