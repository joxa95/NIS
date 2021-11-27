import React from 'react';
import '../SCSS/Section1.scss';
import TopBar from '../Navbar/top-bar';
import Navbar from '../Navbar/Navbar';

function HomePage() {
	return (
		<div className="homepage">
			<div className="background">
				<TopBar />
				<Navbar />
			</div>
		</div>
	);
}

export default HomePage;
