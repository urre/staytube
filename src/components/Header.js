import React from 'react';
import { Link } from 'react-router';

const Header = () => {
	return (
		<header className="sm-flex flex-wrap mxn2 header" role="banner">
		<div className="sm-col-12 p2 center">
			<h1>
				<Link to="/">Staytu.be</Link>
			</h1>
			<ul className="list-reset">
				<li><Link to="/">Concerts</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
		</div>
	</header>
	);
};

export default Header;

