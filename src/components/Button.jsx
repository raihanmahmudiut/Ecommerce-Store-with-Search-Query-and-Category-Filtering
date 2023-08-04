import { Button } from "react-bootstrap";

function Buttons({ onClickHandler, value, title }) {
	return (
		<Button onClick={onClickHandler} value={value}>
			{title}
		</Button>
	);
}

export default Buttons;
