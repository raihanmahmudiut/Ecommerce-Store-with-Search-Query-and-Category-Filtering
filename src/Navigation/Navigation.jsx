import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Navbar, Form, Nav } from "react-bootstrap";
import "./Navigation.css";

function Navigation({ handleInputChange, query }) {
	return (
		<Navbar className=" py-3 mt-2 ">
			<Form>
				<Form.Control
					type="text"
					placeholder="Search"
					className=" mr-sm-2"
					onChange={handleInputChange}
					value={query}
				/>
			</Form>

			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end">
				<Nav>
					<Nav.Item>
						<Nav.Link href="#">
							<FiHeart />
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="">
							<AiOutlineShoppingCart />
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="">
							<AiOutlineUserAdd />
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
