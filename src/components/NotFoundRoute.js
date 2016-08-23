import React from 'react';
import Helmet from 'react-helmet';

const NotFoundRoute = () => {
	return (
			<div className="sm-flex flex-wrap">
			<div className="sm-col-12 p2 center">
							<Helmet
  title="404 | Staytube"
  meta={[{ property: 'og:title', content: 'Hi friend. This link does not exist.' }]}
							/>
				<p>Hi friend. This link does not exist.</p>
			</div>
			</div>
		);
};

export default NotFoundRoute;
