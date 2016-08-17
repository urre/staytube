import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

class Header extends React.Component {
	render() {
		return (<header className="sm-flex flex-wrap mxn2 header" role="banner">
			<div className="sm-col-12 p2 center">
				<Helmet
  title="Staytube | Great full length concert from YouTube"
  meta={[{ property: 'og:title', content: 'Great full length concert from YouTube' }]}
				/>
				<h1>
					<Link to="/">Staytu.be</Link>
				</h1>
				<ul className="list-reset">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
			</div>
		</header>);
	}
}

export default Header;

