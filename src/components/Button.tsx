// import { Button } from "antd";

// function Buttons({ onClickHandler, value, title }) {
// 	return (
// 		<Button onClick={onClickHandler} value={value}>
// 			{title}
// 		</Button>
// 	);
// }

// export default Buttons;

import React from "react";
import { Button, ButtonProps } from "react-bootstrap";

interface ButtonsProps extends ButtonProps {
  onClickHandler: () => void;
  title: string;
  value: string;
}

function Buttons({ onClickHandler, title, value }: ButtonsProps) {
  return (
    <Button onClick={onClickHandler} data-value={value}>
      {title}
    </Button>
  );
}

export default Buttons;
