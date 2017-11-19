import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Video from './Video'
import About from './About'
import LatestVideos from './LatestVideos'

class Main extends React.Component {
	render() {
		return (
			<main>
				<Switch>
					<Route path="/videos/:video" component={Video} />
					<Route path="/about" component={About} />
					<Route exact path="/" component={LatestVideos} />
				</Switch>
			</main>
		)
	}
}

export default Main
