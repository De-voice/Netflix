import React from 'react';
import PropTypes from "prop-types";

function Input({ type, name, value, children, onChange,className,placeholder }) {
	return (
		<>
			{children}
			<input
				type={type}
				name={name}
				value={value}
				className={className}
				onChange={onChange}
                placeholder={placeholder}
			/>
		</>
	);
}

export default Input

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	className: PropTypes.string,
	children:PropTypes.any,
    placeholder:PropTypes.string,
};

// npm install --save prop-types