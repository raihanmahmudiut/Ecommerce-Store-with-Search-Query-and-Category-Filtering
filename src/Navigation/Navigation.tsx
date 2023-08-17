import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Navbar, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./Navigation.css";

function Navigation({ handleInputChange, query }) {
	return (
		<Navbar expand="lg" className="bg-info">
			<Container>
				<Form inline="true">
					<Form.Control
						type="text"
						placeholder="Search"
						onChange={handleInputChange}
						value={query}
					/>
				</Form>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<div className="mobile-nav">
						<Nav className="mr-auto p-2 bg-info rounded ">
							<Nav.Link as={Link} to="/">
								<p className="text-white" size={32}>
									Flyheel
								</p>
							</Nav.Link>
							<Nav.Link as={Link} to="/cart">
								<AiOutlineShoppingCart className="text-white" size={32} />
							</Nav.Link>
							<Nav.Link as={Link} to="">
								<AiOutlineUserAdd className="text-white" size={32} />
							</Nav.Link>
						</Nav>
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
