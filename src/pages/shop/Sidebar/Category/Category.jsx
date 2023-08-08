import { Row, Col, Form, Typography } from "antd";
import Input from "../../../../components/Input";

const { Text } = Typography;

function Category({ handleChange }) {
	return (
		<Row>
			<Col span={24}>
				<Text className="sidebartitle" strong>
					Category
				</Text>
			</Col>
			<Col span={24}>
				<Form>
					<Input handleChange={handleChange} value="" title="All" name="test" />
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
	);
}

export default Category;
