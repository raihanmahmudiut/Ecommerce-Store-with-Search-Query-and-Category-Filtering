import { Row, Col, Form, Typography } from "antd";
import Input from "../../../../components/Input";

const { Text } = Typography;

function Colors({ handleChange }) {
	return (
		<Row>
			<Col span={24}>
				<Text className="sidebartitle" strong>
					Color
				</Text>
			</Col>
			<Col span={24}>
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
	);
}

export default Colors;
