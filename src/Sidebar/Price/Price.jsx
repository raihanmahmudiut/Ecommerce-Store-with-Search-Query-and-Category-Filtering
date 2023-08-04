import { Container, Row, Col, Form } from "react-bootstrap";
import Input from "../../components/Input";

function Price({ handleChange }) {
	return (
		<Container>
			<Row>
				<Col>
					<h6 className="sidebartitle">Price</h6>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form>
						<Input
							handleChange={handleChange}
							value=""
							title="All"
							name="test2"
						/>
						<Input
							handleChange={handleChange}
							value={50}
							title="$0 - 50"
							name="test2"
						/>

						<Input
							handleChange={handleChange}
							value={100}
							title="$50 - $100"
							name="test2"
						/>

						<Input
							handleChange={handleChange}
							value={150}
							title="$100 - $150"
							name="test2"
						/>

						<Input
							handleChange={handleChange}
							value={200}
							title="Over $150"
							name="test2"
						/>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default Price;
