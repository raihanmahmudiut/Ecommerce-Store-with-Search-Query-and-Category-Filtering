import { Row, Col, Form, Typography } from "antd";
import Input from "../../../../components/Input";
import React from "react";

const { Text } = Typography;

interface CategoryProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

function Category({ handleChange }: CategoryProps) {
	return (
		<Row>
			<Col span={24}>
				<Text className="sidebartitle" strong>
					Category
				</Text>
			</Col>
			<Col span={24}>
				<Form>
					<Input handleChange={handleChange} value="" title="All" name="test" color=""/>
					<Input
						handleChange={handleChange}
						value="sneakers"
						title="Sneakers"
						name="test"
						color=""
					/>
					<Input
						handleChange={handleChange}
						value="flats"
						title="Flats"
						name="test"
						color=""
					/>
					<Input
						handleChange={handleChange}
						value="sandals"
						title="Sandals"
						name="test"
						color=""
					/>
					<Input
						handleChange={handleChange}
						value="heels"
						title="Heels"
						name="test"
						color=""
					/>
				</Form>
			</Col>
		</Row>
	);
}

export default Category;
