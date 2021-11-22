import React from 'react';
import './homeStyle.scss';
import TopBar from '../Navbar/top-bar';
import Navbar from '../Navbar/Navbar';

function HomePage() {
	return (
		<div>
			<div className="homepage">
				<div className="background">
					<TopBar />
					<Navbar />
				</div>
			</div>
		</div>
	);
}

export default HomePage;
