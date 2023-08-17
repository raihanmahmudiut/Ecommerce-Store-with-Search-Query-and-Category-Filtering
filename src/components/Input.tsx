import React from "react";
import { Form } from "react-bootstrap";
import "./Input.css";

interface InputProps {
	handleChange: (event: any) => void;
	value: string | number;
	title: string;
	color: string;
	name: string;
}

function Input({ handleChange, value, title, color, name }: InputProps) {
	return (
		<Form.Check id="radio">
			<Form.Check.Input
				type="radio"
				value={value}
				name={name} // Use the unique name attribute
				onChange={handleChange}
				style={{ backgroundColor: color, borderColor: "black" }}
				id={`radio-${name}-${value}`} // Add an id based on the name and value
			/>
			<Form.Check.Label htmlFor={`radio-${name}-${value}`} style={{ color: "black" }}>{title}</Form.Check.Label>
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
