import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import products from "../../db/data";
import { CartItem } from "./cartitem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const { cartItems, getTotalCartAmount } = useContext(ShopContext);
	const totalAmount = getTotalCartAmount();

	const navigate = useNavigate();

	return (
		<div className="cart">
			<div>
				<h1>Your Cart Items</h1>
			</div>
			<div className="cartItems">
				{products.map(({ id, title, newPrice, img }) => {
					if (cartItems[id] !== 0) {
						return (
							<CartItem
								key={Math.random()}
								id={id}
								title={title}
								newPrice={newPrice}
								img={img}
							/>
						);
					}
				})}
			</div>

			<div>
				{totalAmount > 0 ? (
					<div className="checkout">
						<p>Subtotal: ${totalAmount}</p>
						<button onClick={() => navigate("/")}> Continue Shopping</button>
						<button> Checkout</button>
					</div>
				) : (
					<h1>Nothing here! Buy some stuff! Total: {totalAmount}</h1>
				)}
			</div>
		</div>
	);
};

export default Cart;
