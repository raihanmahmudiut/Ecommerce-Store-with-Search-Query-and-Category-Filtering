import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Navigation from "../../Navigation/Navigation";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import { Row, Col, Button } from "antd";
import { FilterOutlined, FilterFilled } from "@ant-design/icons";
import "./shop.css";
// import "./siderCollapseStyles.css";

import { useState } from "react";
import products from "../../db/data.jsx";
import CardComponent from "../../components/Card";
import Category from "../shop/Sidebar/Category/Category";
import Price from "../shop/Sidebar/Price/Price";
import Colors from "../shop/Sidebar/Colors/Colors";

//-------------Ant Design Layout --------------------
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
	color: "#e5e5e6",
	height: 80,
	lineHeight: "24px",
	backgroundColor: "#ffffff",
  } as const;
  
  const contentStyle = {
	textAlign: "center",
	minHeight: 120,
	lineHeight: "120px",
	color: "#fff",
	backgroundColor: "#bbe4e9",
  } as const;
  
  const siderStyle = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	textAlign: "left",
	lineHeight: "20px",
	color: "#fff",
	backgroundColor: "#79c2d0",
  } as const;
  
  const footerStyle = {
	textAlign: "center",
	color: "#fff",
	backgroundColor: "#7dbcea",
  } as const;
  




function Shop() {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [query, setQuery] = useState<string>(""); // Assuming query should be a string

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	  };
	  
	  const filteredItems = products.filter(
		(product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
	  );
	  
	  // Radio Filter
	  
	  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedCategory(event.target.value);
	  };
	  
	  // Button filter Recommended
	  
	  const handleClick = (value: string) => {
		setSelectedCategory(value);
	  };
	  
	  
	  

	function filteredData(products: { id: number; img: string; title: string; star: React.JSX.Element; reviews: string; prevPrice: string; newPrice: string; company: string; color: string; category: string; }[], selected: string | null, query: string) {
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
				<Navigation handleInputChange={handleInputChange} query={undefined} />
			</Header>

			<Layout hasSider>
				<Sider
					style={siderStyle}
					collapsible
					collapsed={collapsed}
					collapsedWidth={0}
					onCollapse={() => setCollapsed(!collapsed)}
					trigger={null}
				>
					<Button
						type="text"
						icon={collapsed ? <FilterFilled /> : <FilterOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						className="ant-layout-sider-zero-width-trigger ant-layout-sider-zero-width-trigger-left"
						style={{
							fontSize: "16px",
							width: 40,
							height: 48,
						}}
					/>
					<div className="justify-content-center">
						<h1>
							<FilterOutlined />
						</h1>
					</div>

					{collapsed ? null : (
						<div>
							<Category handleChange={handleChange} />
							<Price handleChange={handleChange} />
							<Colors handleChange={handleChange} />
						</div>
					)}
				</Sider>
				<Content style={contentStyle}>
					<Recommended handleClick={(value: string) => handleClick(value)}/>
					<Products result={result} />
				</Content>
			</Layout>
		</Layout>
	);
}

export default Shop;
