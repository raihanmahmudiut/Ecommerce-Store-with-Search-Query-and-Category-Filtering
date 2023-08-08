// import { Button } from "antd";

// function Buttons({ onClickHandler, value, title }) {
// 	return (
// 		<Button onClick={onClickHandler} value={value}>
// 			{title}
// 		</Button>
// 	);
// }

// export default Buttons;

import { Button } from "react-bootstrap";

function Buttons({ onClickHandler, value, title }) {
	return (
		<Button onClick={onClickHandler} value={value}>
			{title}
		</Button>
	);
}

export default Buttons;
