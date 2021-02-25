import React,{ useState } from "react";
import PropTypes from "prop-types";

function SubQestionAnswer({ qestion, children }) {

    	const [show, setShow] = useState(false);

			const showChildren = () => {
				setShow(!show);
			};
    
	return (
		<>
			<div style={{marginBottom:"0.2em"}} className="accordion_div" onClick={showChildren}>
				<button className="accordion_btn">{qestion}</button>
				<i
					className={` accordion_plus ${
						!show ? "fas fa-plus" : " fas fa-times"
					}`}></i>
			</div>
			{ show && <span className={`accordion_hidden ${show && "isShow"}`}>{children}</span> }
		</>
	);
}

SubQestionAnswer.propTypes = {
	qestion: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	// showChildren: PropTypes.func.isRequired,
	// show: PropTypes.bool.isRequired,
};

export default SubQestionAnswer;
