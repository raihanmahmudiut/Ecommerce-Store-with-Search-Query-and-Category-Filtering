import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import "./cart.css";

export const CartItem = ({ id, title, newPrice, img }) => {
	const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
		useContext(ShopContext);

	return (
		<div className="cartItem">
			<img src={img}></img>
			<div className="description">
				<p>
					<b>{title}</b>
				</p>
				<p>${newPrice}</p>
				<div className="countHandler">
					<button onClick={() => removeFromCart(id)}>-</button>
					<input
						value={cartItems[id]}
						onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
					/>
					<button onClick={() => addToCart(id)}>+</button>
				</div>
			</div>
		</div>
	);
};
