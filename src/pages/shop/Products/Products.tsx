import { Container } from "react-bootstrap";
import "./Products.css";
import React from "react";

interface ProductProps {
	result: JSX.Element;
}

function Products({ result }: ProductProps) {
	return <Container>{result}</Container>;
}

export default Products;
