import React, { useContext } from "react";
import { Card, Col, Button } from "antd";
import {
	HeartOutlined,
	ShoppingOutlined,
	EllipsisOutlined,
} from "@ant-design/icons";
import { ShopContext } from "../context/shopcontext";

const { Meta } = Card;

interface CardComponentProps {
	id: number;
	img: string;
	title: string;
	star: JSX.Element;
	reviews: string;
	prevPrice: number | string;
	newPrice: number | string;


}

const CardComponent: React.FC<CardComponentProps> = ({
	id,
	img,
	title,
	star,
	reviews,
	prevPrice,
	newPrice,
}) => {

	const shopContext = useContext(ShopContext)

	if (!shopContext) {
		return null
	}

	const { addToCart, cartItems } = shopContext;
	const cartItemAmount = cartItems[id];
	return (
		<Col xs={24} sm={12} md={8} lg={6}>
			<Card
				style={{
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
				actions={[
					<HeartOutlined key="favorite" />,
					<Button
						key="add-to-cart"
						onClick={() => {
							console.log("Adding to cart:", id);
							addToCart(id);
						}}
						style={{
							display: "inline-flex", // Display as inline-flex
							alignItems: "center", // Align items vertically
						}}
					>
						<ShoppingOutlined style={{ marginRight: "5px" }} />
						{cartItemAmount > 0 && (
							<span style={{ marginLeft: "5px" }}>{`(${cartItemAmount})`}</span>
						)}
					</Button>,
					<EllipsisOutlined key="ellipsis" />,
				]}
			>
				<div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
					<div>
						<img alt={title} src={img} style={{ width: "100%" }} />
					</div>
					<div className="d-flex flex-column justify-content-end">
						<h5>{title}</h5>
						<p className="card-reviews">
							{star} {star} {star} {star} <span>{reviews}</span>
						</p>
					</div>
					<p className="price justify-content-between">
						${newPrice} <br />
						<del>{prevPrice}</del>
					</p>
				</div>
			</Card>
		</Col>
	);
};

export default CardComponent;
