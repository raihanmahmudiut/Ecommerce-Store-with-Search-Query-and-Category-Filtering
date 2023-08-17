import React, { createContext, useState, ReactNode } from "react";

import products from "../db/data";

interface ShopContextType {
	cartItems: Record<number, number>;
	addToCart: (itemID: number) => void;
	removeFromCart: (itemID: number) => void;
	updateCartItemCount: (newAmount: number, itemID: number) => void;
	getTotalCartAmount: () => number;
}


export const ShopContext = createContext<ShopContextType | null>(null);

const getDefaultCart = () => {
	let cart: Record<number, number> = {};
	for (let i = 0; i < products.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

interface ShopContextProviderProps {
	children: ReactNode;
}

export const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
	const [cartItems, setCartItems] = useState<Record<number, number>>(getDefaultCart);

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = products.find((product) => product.id === Number(item));
				totalAmount += cartItems[item] * parseInt(itemInfo.newPrice);
			}
		}
		return totalAmount;
	};

	const addToCart = (itemId: number) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeFromCart = (itemId: number) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const updateCartItemCount = (newAmount: number, itemId: number) => {
		setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
	};

	const contextValue: ShopContextType  = {
		cartItems,
		addToCart,
		removeFromCart,
		updateCartItemCount,
		getTotalCartAmount,
	};

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};
