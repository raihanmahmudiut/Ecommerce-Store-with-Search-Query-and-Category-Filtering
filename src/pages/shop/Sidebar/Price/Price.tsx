import { Row, Col, Form, Typography } from "antd";
import Input from "../../../../components/Input";
import React from "react";

const { Text } = Typography;

//interface for the props
interface PriceProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

function Price({ handleChange }: PriceProps) {
	return (
		<Row>
			<Col span={24}>
				<Text className="sidebartitle" strong>
					Price
				</Text>
			</Col>
			<Col span={24}>
				<Form>
					<Input
						handleChange={handleChange}
						value=""
						title="All"
						name="test2"
						color=""
					/>
					<Input
						handleChange={handleChange}
						value={50}
						title="$0 - 50"
						name="test2"
						color=""
					/>
					<Input
						handleChange={handleChange}
						value={100}
						title="$50 - $100"
						name="test2"
						color=""
					/>
					<Input
						handleChange={handleChange}
						value={150}
						title="$100 - $150"
						name="test2"
						color=""
					/>
					<Input
						handleChange={handleChange}
						value={200}
						title="Over $150"
						name="test2"
						color=""
					/>
				</Form>
			</Col>
		</Row>
	);
}

export default Price;
