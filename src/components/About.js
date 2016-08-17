import React from 'react';
import Helmet from 'react-helmet';

class About extends React.Component {
	render() {
		return (<div className="sm-flex flex-wrap mxn2">
			<div className="sm-col-12 p2">
				<Helmet
				title="About | Staytube"
				meta={[{ property: 'og:title', content: 'About' }]}
				/>
				<h1>About</h1>
				<p>Dedicated to great full length concerts on YouTube.</p>
				</div>
			</div>);
	}
}

export default About;
