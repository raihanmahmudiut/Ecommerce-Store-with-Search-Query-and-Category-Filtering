import Sidebar from "./Sidebar/Sidebar";
import Navigation from "./Navigation/Navigation";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useState } from "react";
import products from "./db/data";
import CardComponent from "./components/Card";

function App() {
	const [selectedCategory, setSelectedCategory] = useState(null);

	//input filter
	const [query, setQuery] = useState("");

	const handleInputChange = (event) => {
		setQuery(event.target.value);
	};

	const filteredItems = products.filter(
		(product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
	);

	//Radio Filter

	const handleChange = (event) => {
		setSelectedCategory(event.target.value);
	};

	//button filter Recommended

	const handleClick = (event) => {
		setSelectedCategory(event.target.value);
	};

	function filteredData(products, selected, query) {
		let filteredProducts = products;

		// filtering input items
		if (query) {
			filteredProducts = filteredItems;
		}
		// Selected filter
		if (selected) {
			filteredProducts = filteredProducts.filter(
				({ category, color, company, newPrice, title }) =>
					category === selected ||
					color === selected ||
					company === selected ||
					newPrice === selected ||
					title === selected
			);
		}

		return (
			<Row>
				{filteredProducts.map(
					({ img, title, star, reviews, prevPrice, newPrice }) => (
						<Col key={Math.random()} sm={6} md={4} lg={3}>
							<CardComponent
								img={img}
								title={title}
								star={star}
								reviews={reviews}
								prevPrice={prevPrice}
								newPrice={newPrice}
							/>
						</Col>
					)
				)}
			</Row>
		);
	}

	const result = filteredData(products, selectedCategory, query);

	return (
		<>
			<Row>
				<Col sm="2">
					<Sidebar handleChange={handleChange} />
				</Col>
				<Col>
					<Navigation query={query} handleInputChange={handleInputChange} />
					<Recommended handleClick={handleClick} />
					<Products result={result} />
				</Col>
			</Row>
		</>
	);
}

export default App;
