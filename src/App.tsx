import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shopcontext";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Defined the type for the App component's props
// For now, it doesn't receive any props
type AppProps = {};

// Definedthe App component with TypeScript typings
const App: React.FC<AppProps> = () => {
	return (
		<ShopContextProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</ShopContextProvider>
	);
}

export default App;
