import React from 'react';
import Helmet from 'react-helmet';

class About extends React.Component {
	render() {
		return (<div className="sm-flex flex-wrap mxn2">
			<div className="col col-12 sm-col-6 mx-auto p2">
				<Helmet
  			title="About | Staytube"
  			meta={[{ property: 'og:title', content: 'About' }]}
				/>
				<h1>About</h1>
				<p>Dedicated to great full length concerts. Exploring the concept of using "Youtube as a CMS". Made by <a href="https://twitter.com/urre">Urban Sandén (@urre)</a></p>
				<h3>Tools</h3>
				<ul className="list-reset tools">
					<li>ReactJS</li>
					<li>Babel</li>
					<li>Webpack</li>
					<li>PostCSS</li>
					<li>Basscss</li>
					<li>YouTube API</li>
					<li>Surge</li>
					<li>Cloudflare</li>
				</ul>
				</div>
			</div>);
	}
}

export default About;
