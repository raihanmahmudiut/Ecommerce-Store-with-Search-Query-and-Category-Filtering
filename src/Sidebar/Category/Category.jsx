import { Row, Col, Form, Container } from "react-bootstrap";
import Input from "../../components/Input";

function Category({ handleChange }) {
	return (
		<Container>
			<Row>
				<Col>
					<h6 className="sidebartitle">Category</h6>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form>
						<Input
							handleChange={handleChange}
							value=""
							title="All"
							name="test"
						/>
						<Input
							handleChange={handleChange}
							value="sneakers"
							title="Sneakers"
							name="test"
						/>
						<Input
							handleChange={handleChange}
							value="flats"
							title="Flats"
							name="test"
						/>
						<Input
							handleChange={handleChange}
							value="sandals"
							title="Sandals"
							name="test"
						/>
						<Input
							handleChange={handleChange}
							value="heels"
							title="Heels"
							name="test"
						/>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default Category;
