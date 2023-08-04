import { Card } from "react-bootstrap";

import { BsFillBagHeartFill } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";

function CardComponent({ img, title, star, reviews, prevPrice, newPrice }) {
	return (
		<Card style={{ width: "19rem" }} className="p-4 justify-content-between ">
			<Card.Img variant="top" src={img} alt={title} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Row>
					<Col align="left">
						<Card.Text className="card-reviews">
							{star} {star} {star} {star} <span>{reviews}</span>
						</Card.Text>
						<Card.Text className="price">
							<del>{prevPrice}</del> {newPrice}
						</Card.Text>
					</Col>

					<Col align="right">
						<Card.Text className="bag">
							<BsFillBagHeartFill className="bag-icon" />
						</Card.Text>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}

export default CardComponent;
