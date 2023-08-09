import Sidebar from "./Sidebar/Sidebar";
import Navigation from "../../Navigation/Navigation";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import { Row, Col } from "antd";
import "./shop.css";
import { useState } from "react";
import products from "../../db/data";
import CardComponent from "../../components/Card";

//-------------Ant Design Layout --------------------
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
	color: "#e5e5e6",
	height: 80,

	lineHeight: "64px",
	backgroundColor: "#ffffff",
};
const contentStyle = {
	textAlign: "center",
	minHeight: 120,
	lineHeight: "120px",
	color: "#fff",
	backgroundColor: "#bbe4e9",
};
const siderStyle = {
	display: "flex", // Set the container to display as flex
	flexDirection: "column", // Stack items vertically
	alignItems: "center",
	textAlign: "left",
	lineHeight: "20px",
	color: "#fff",
	backgroundColor: "#79c2d0",
};
const footerStyle = {
	textAlign: "center",
	color: "#fff",
	backgroundColor: "#7dbcea",
};

function Shop() {
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
			<Row gutter={[8, 8]}>
				{filteredProducts.map(
					({ id, img, title, star, reviews, prevPrice, newPrice }) => (
						<CardComponent
							key={Math.random()}
							id={id}
							img={img}
							title={title}
							star={star}
							reviews={reviews}
							prevPrice={prevPrice}
							newPrice={newPrice}
						/>
					)
				)}
			</Row>
		);
	}

	const result = filteredData(products, selectedCategory, query);

	return (
		<Layout>
			<Header style={headerStyle} className="custom-header">
				<Navigation handleInputChange={handleInputChange} />
			</Header>

			<Layout hasSider>
				<Sider style={siderStyle}>
					<Sidebar handleChange={handleChange} />
				</Sider>
				<Content style={contentStyle}>
					<Recommended handleClick={handleClick} />
					<Products result={result} />
				</Content>
			</Layout>
		</Layout>
	);
}

export default Shop;
