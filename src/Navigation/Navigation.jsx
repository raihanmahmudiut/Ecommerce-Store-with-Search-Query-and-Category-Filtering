import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Navbar, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Navigation({ handleInputChange, query }) {
	return (
		<Navbar expand="lg">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Flyheel
				</Navbar.Brand>
				<Form>
					<Form.Control
						type="text"
						placeholder="Search"
						className=" mr-sm-2"
						onChange={handleInputChange}
						value={query}
					/>
				</Form>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<Nav>
						<Nav.Link as={Link} to="/">
							<FiHeart size={32} />
						</Nav.Link>
						<Nav.Link as={Link} to="/cart">
							<AiOutlineShoppingCart size={32} />
						</Nav.Link>
						<Nav.Link as={Link} to="">
							<AiOutlineUserAdd size={32} />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
