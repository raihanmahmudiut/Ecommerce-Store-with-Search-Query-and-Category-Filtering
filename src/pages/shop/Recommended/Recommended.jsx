import React from "react";
import { Card } from "antd";
import Buttons from "../../../components/Button";

const { Meta } = Card;

function Recommended({ handleClick }) {
	return (
		<Card title="Recommended Brands" style={{ width: "100%" }}>
			<section>
				<Buttons onClickHandler={handleClick} value="" title="All Products" />
				<Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
				<Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
				<Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
				<Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
			</section>
		</Card>
	);
}

export default Recommended;
