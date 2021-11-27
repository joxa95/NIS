import './App.css';
import HomePage from './Components/Home/HomePage';
import Footer from './Components/Footer/LastPage';
import Login from './Components/SignUp/Login';
import Forgot from './Components/SignUp/Forgot';
import SignUp from './Components/SignUp/SignUp';

import { Routes, Route } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/footer" element={<Footer />} />
				<Route path="/login" element={<Login />} />
				<Route path="/forgot" element={<Forgot />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
