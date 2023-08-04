import { Row, Col, Form, Container } from "react-bootstrap";
import Input from "../../components/Input";

function Colors({ handleChange }) {
	return (
		<Container>
			<Row>
				<Col>
					<h6 className="sidebartitle">Color</h6>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form>
						<Input
							handleChange={handleChange}
							value=""
							title="All"
							name="test1"
							color="linear-gradient(blue, crimson)"
						/>
						<Input
							handleChange={handleChange}
							value="black"
							title="Black"
							name="test1"
							color="black"
						/>

						<Input
							handleChange={handleChange}
							value="blue"
							title="Blue"
							name="test1"
							color="blue"
						/>

						<Input
							handleChange={handleChange}
							value="red"
							title="Red"
							name="test1"
							color="red"
						/>

						<Input
							handleChange={handleChange}
							value="green"
							title="Green"
							name="test1"
							color="green"
						/>
						<Input
							handleChange={handleChange}
							value="white"
							title="White"
							name="test1"
							color="white"
						/>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default Colors;
