import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import About from './components/About';
import LatestVideos from './components/LatestVideos';
import Video from './components/Video';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={LatestVideos} />
		<Route path="/videos/:video" component={Video} />
		<Route path="/about" component={About} />
	</Route>
);

export default routes;
