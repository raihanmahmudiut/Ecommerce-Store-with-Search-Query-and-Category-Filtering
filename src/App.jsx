import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shopcontext";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
	return (
		<ShopContextProvider>
			<Container>
				<Router>
					<Routes>
						<Route path="/" element={<Shop />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</Router>
			</Container>
		</ShopContextProvider>
	);
}

export default App;
