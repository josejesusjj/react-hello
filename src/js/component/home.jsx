import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Container from "./container.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />

			<div>
				<Container />
			</div>

			<Footer />
		</div>
	);
};

export default Home;
