import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Helmet from 'react-helmet';
import Image from 'legit-image';
const apikey = require('./../../config');

class LatestVideos extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: false, error: false, videos: [], nextpagetoken: '', prevpagetoken: '' };
		this.fetchVideos = this.fetchVideos.bind(this);
		this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
	}

	componentDidMount() {
		this.fetchVideos();
	}

	fetchVideos(direction) {
		this.setState({ loading: true });

		const token = direction == 'next' ? this.state.nextpagetoken : this.state.prevpagetoken;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&pageToken=${token}&playlistId=PLUIjiNV9YTmsGucmZPzRrVR1GSlmRQ6pk&key=${apikey}&alt=json`;

		axios.get(url)
		.then(res => {
			console.log(res.data.items);
			this.setState({ videos: res.data.items, loading: false, nextpagetoken: res.data.nextPageToken ? res.data.nextPageToken : '', prevpagetoken: res.data.prevPageToken ? res.data.prevPageToken : '' });
		})
		.catch(error => {
			console.log(error);
		});
	}

	nextPage(event) {
		event.preventDefault();
		this.fetchVideos('next', this.state.nextpagetoken);
	}

	prevPage(event) {
		event.preventDefault();
		this.fetchVideos('prev', this.state.prevpagetoken);
	}

	renderVideos() {
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
					<Image src={image} role="presentation" alt={alt} />
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
			{this.state.loading ? <div className="sk-rotating-plane"></div> : this.renderVideos()}
			{this.props.children}

			<div className="sm-col-12 p2 center">
				<nav role="navigation">
					<ul className="list-reset flex justify-between">
						<li><a className="btn btn-outline btn-medium"onClick={this.prevPage}>Previous</a></li>
						<li><a className="btn btn-outline btn-medium"onClick={this.nextPage}>Next</a></li>
					</ul>
				</nav>
			</div>

			</div>
			);
	}

}

export default LatestVideos;
