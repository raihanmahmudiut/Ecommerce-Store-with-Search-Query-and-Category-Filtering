import React from "react";
import { Card, Button } from "react-bootstrap";
import Buttons from "../components/Button";

function Recommended({ handleClick }) {
	return (
		<Card>
			<Card.Header as="h5">Recommended Brands</Card.Header>
			<Card.Body className="justify-content-between" style={{ width: "35rem" }}>
				<Buttons onClickHandler={handleClick} value="" title="All Products" />
				<Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
				<Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
				<Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
				<Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
			</Card.Body>
		</Card>
	);
}

export default Recommended;
