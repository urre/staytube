import React from 'react';
import ajax from 'superagent';
import Helmet from 'react-helmet';
const apikey = require('./../../config');

class Video extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			info: [],
		};
	}

	componentWillMount() {
		this.getInfo();
	}

	getInfo() {
		this.setState({ loading: true });

		ajax.get(`https://www.googleapis.com/youtube/v3/videos?id=${this.props.params.video}&key=${apikey}&fields=*&part=snippet,contentDetails,statistics,status`)
		.end((error, response) => {
			if (!error && response) {
				this.setState({
					title: response.body.items[0].snippet.title,
					definition: response.body.items[0].contentDetails.definition,
					duration: response.body.items[0].contentDetails.duration,
					stats: response.body.items[0].statistics.viewCount,
					loading: false,
				});
			}
		}
		);
	}

	formatViews(amount) {
		return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
	}

	formatDefiniion(kind) {
		return kind.toUpperCase();
	}

	renderVideo() {
		return (<div>
			<h1>{this.state.title}</h1>
			<ul className="list-reset">
				<li>{this.formatViews(`${this.state.stats}`)} views</li>
				<li>{this.formatDefiniion(`${this.state.definition}`)}</li>
			</ul>
			<div className="video">
				<iframe src={`https://www.youtube.com/embed/${this.props.params.video}?rel=0;3&amp;autohide=1&amp;showinfo=0`} frameBorder="0" allowFullScreen />
			</div>
		</div>

			); }

	render() {
		return (<div className="sm-flex flex-wrap">
			<div className="sm-col-12 p2">
				<Helmet
  			title={`${this.state.title}`}
  			meta={[{ property: 'og:title', content: `${this.state.title}` }]}
				/>
				{this.state.loading ? <div className="sk-rotating-plane"></div> : this.renderVideo()}
				{this.props.children}
			</div>
		</div>);
	}

	}

Video.propTypes = {
	params: React.PropTypes.object,
};

export default Video;
