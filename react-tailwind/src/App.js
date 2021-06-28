import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<Blog />
			<Contact />
		</div>
	);
}

export default App;
