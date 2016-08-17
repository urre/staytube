import React, { Component } from 'react';
import { Link } from 'react-router';
import ajax from 'superagent';
import Helmet from 'react-helmet';
const apikey = require('./../../config');

class LatestVideos extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: false, error: false, videos: [] };
		this.fetchVideos = this.fetchVideos.bind(this);
	}

	componentWillMount() {
		this.fetchVideos();
	}

	fetchVideos() {
		this.setState({ loading: true });

		ajax.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLUIjiNV9YTmsJBus2-4vyA2zhuE4WJrwx&key=${apikey}&alt=json`)
		.end((error, response) => {
			if (!error && response) {
				this.setState({ videos: response.body.items, loading: false });
			} else {
				console.log('Error fetching user data.', error);
			}
		}
		);
	}

	renderVideo() {
		return this.state.videos.map((video, index) => {
			const videoClip = video.snippet.resourceId.videoId;
			let image = 'http://placehold.it/350x150';

			if (video.snippet.hasOwnProperty('thumbnails')) {
				image = video.snippet.thumbnails.high.url;
			}

			if (video.snippet.title !== 'Deleted video') {
				return (<div key={index} className="sm-col-6 lg-col-4 p2">
					<Link to={`/videos/${videoClip}`} >
						<img src={image} alt={this.video.snippet.title} role="presentation"/>
					</Link>
				</div>);
			}
		});
	}

	render() {
		return (
			<div className="sm-flex flex-wrap">
				<Helmet
				title="Latest Videos | Staytube"
				meta={[{ property: 'og:title', content: 'Home' }]}
				/>
				{this.state.loading ? <div className="sk-rotating-plane"></div> : this.renderVideo()}
				{this.props.children}
			</div>
			);
	}

}

export default LatestVideos;
