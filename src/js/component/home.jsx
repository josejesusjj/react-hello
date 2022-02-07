import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Container from "./container.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Container />
		</div>
	);
};

export default Home;
