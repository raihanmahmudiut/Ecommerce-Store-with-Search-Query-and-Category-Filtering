import React from "react";
import { Form } from "react-bootstrap";
import "./Input.css";

function Input({ handleChange, value, title, color, name }) {
	return (
		<Form.Check id="radio">
			<Form.Check.Input
				type="radio"
				value={value}
				name={name}
				onChange={handleChange}
				style={{ backgroundColor: color, borderColor: "black" }}
			/>
			<Form.Check.Label style={{ color: "black" }}>{title}</Form.Check.Label>
		</Form.Check>
	);
}

export default Input;

{
	/* <Form.Check
			label={title}
			value={value}
			name="group1"
			type="radio"
			onChange={handleChange}
			
        /> */
}
