import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import "./cart.css";

interface CartItemProps {
	id: number;
	title: string;
	newPrice: number;
	img: string;
}

export const CartItem: React.FC<CartItemProps> = ({ id, title, newPrice, img }) => {
	const shopContext = useContext(ShopContext);

  if (!shopContext) {
    // Handle the case when context is null
    return null; // or any other fallback UI
  }

	const { cartItems, addToCart, removeFromCart, updateCartItemCount } = shopContext;
	
	

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
