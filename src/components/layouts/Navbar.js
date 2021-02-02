import React from 'react';

export default function Navbar() {
	return (
		<nav className='navbar bg-primary '>
			<h1>
				<i className='fas fa-images' /> Search for Your Favorite Image
			</h1>
			<ul>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<a href='/'>About</a>
				</li>
			</ul>
		</nav>
	);
}
