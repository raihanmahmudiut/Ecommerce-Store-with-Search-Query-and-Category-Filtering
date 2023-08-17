import { Card } from "antd";
import Buttons from "../../../components/Button";
import React from "react";

interface RecommendedProps {
  handleClick: (value: string) => void;
}

function Recommended({ handleClick }: RecommendedProps) {
  return (
    <Card title="Recommended Brands" style={{ width: "100%" }}>
      <section>
        <Buttons onClickHandler={() => handleClick("")} title="All Products" value="" />
        <Buttons onClickHandler={() => handleClick("Nike")} title="Nike" value="Nike" />
        <Buttons onClickHandler={() => handleClick("Adidas")} title="Adidas" value="Adidas" />
        <Buttons onClickHandler={() => handleClick("Puma")} title="Puma" value="Puma" />
        <Buttons onClickHandler={() => handleClick("Vans")} title="Vans" value="Vans" />
      </section>
    </Card>
  );
}

export default Recommended;
