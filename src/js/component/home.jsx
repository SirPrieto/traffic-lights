import React from "react";
import { useState, useEffect } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [position, setPosition] = useState("top");

	return (
		<div className="containermain">
			<div className="trafficLight ">
				<div
					className={
						position == "top" ? "red light shiny " : "red light"
					}></div>
				<div
					className={
						position == "middle"
							? "light yellow  shiny"
							: "yellow light"
					}></div>
				<div
					className={
						position == "bottom"
							? "light green shiny"
							: "green light"
					}></div>
			</div>
			<button onClick={() => setPosition("top")}>Red</button>
			<button onClick={() => setPosition("middle")}>Yellow</button>
			<button onClick={() => setPosition("bottom")}>Green</button>
		</div>
	);
};

export default Home;
