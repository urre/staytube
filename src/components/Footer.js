import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

class Footer extends React.Component {
	render() {
		return (<div className="sm-flex flex-wrap mxn2">
			<div className="sm-col-12 p2 center">
			<p><small>Made by <a href="https://urre.me">Urban Sandén</a></small></p>
			</div>
			</div>);
	}
}

export default Footer;

