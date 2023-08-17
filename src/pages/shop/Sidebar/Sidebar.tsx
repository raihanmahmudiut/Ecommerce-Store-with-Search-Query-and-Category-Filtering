import { FilterOutlined } from "@ant-design/icons";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import React from "react";

// the interface for the props
interface SidebarProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
function Sidebar({ handleChange }: SidebarProps) {
	return (
		<section className=" ">
			<div className="logo-container">
				<h1 className="">
					<FilterOutlined />
				</h1>
			</div>
			<div className="justify-content-start">
				<div className="mb-2">
					<Category handleChange={handleChange} />
				</div>
				<div className="mb-2">
					<Price handleChange={handleChange} />
				</div>
				<div>
					<Colors handleChange={handleChange} />
				</div>
			</div>
		</section>
	);
}

export default Sidebar;
