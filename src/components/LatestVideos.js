import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
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
		axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLUIjiNV9YTmsGucmZPzRrVR1GSlmRQ6pk&key=${apikey}&alt=json`)
		.then(res => {
			console.log(res);
			this.setState({ videos: res.data.items, loading: false });
		})
		.catch(error => {
    																															console.log(error);
  																					});
	}

	renderVideo() {
		return this.state.videos.map((video, index) => {
			const videoClip = video.snippet.resourceId.videoId;
			let image = 'http://placehold.it/350x150';
			const alt = video.snippet.title;

			if (video.snippet.hasOwnProperty('thumbnails')) {
				image = video.snippet.thumbnails.high.url;
			}

			if (video.snippet.title !== 'Deleted video') {
				return (<div key={index} className="sm-col sm-col-6 lg-col-4 p2">
					<Link to={`/videos/${videoClip}`} >
						<img src={image} alt={alt} role="presentation" />
						<p>{alt}</p>
					</Link>
				</div>);
			}
		});
	}

	render() {
		return (
			<div className="sm-flex flex-wrap mxn2">
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
