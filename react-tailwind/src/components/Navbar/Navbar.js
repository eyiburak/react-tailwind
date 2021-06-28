import React, { useState } from 'react';
import { MenuItems } from './MenuItems';

const Navbar = () => {
	const [navBarStatus, setNavBarStatus] = useState(false);

	return (
		<nav className="menu">
			<div className="nav-inner flex justify-between items-center border-b pb-3">
				<div className="navbar-logo flex align-center border-solid border-gray-400 border p-2 rounded">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
						/>
					</svg>
					<div className="logo-text ml-2">
						<span className="text-md">Logo Text</span>
					</div>
				</div>
				<ul className="flex justify-start hidden md:flex">
					{MenuItems.map((item, index) => {
						return (
							<li key={index} className="mx-5">
								<a className={item.cName} href={item.url}>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
				<div
					className="md:hidden flex items-center"
					onClick={() => setNavBarStatus(prev => !prev)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/>
					</svg>
				</div>
			</div>

			<ul
				className={`mobile-menu md:hidden mt- text-left rounded-lg ${
					navBarStatus ? 'block' : 'hidden'
				}`}
			>
				{MenuItems.map((item, index) => {
					return (
						<li
							key={index}
							className="mx-5 p-2 border-b border-gray-300 first:border-none"
						>
							<a className={item.cName} href={item.url}>
								{item.title}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
