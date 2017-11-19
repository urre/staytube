import React from 'react'
import axios from 'axios'
import Helmet from 'react-helmet'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import ReactGA from 'react-ga'
const apikey = require('./../../config')

const history = createBrowserHistory()

history.listen((location, action) => {
	ReactGA.set({ page: location.pathname })
	ReactGA.pageview(location.pathname)
})

class Video extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			info: []
		}
	}
	componentWillMount() {
		ReactGA.set({ page: location.pathname })
		ReactGA.pageview(location.pathname)
	}
	componentDidMount() {
		this.getInfo()
	}
	getInfo() {
		this.setState({
			loading: true
		})
		axios
			.get(
				`https://www.googleapis.com/youtube/v3/videos?id=${this.props.match
					.params
					.video}&key=${apikey}&fields=*&part=snippet,contentDetails,statistics,status`
			)
			.then(res => {
				this.setState({
					title: res.data.items[0].snippet.title,
					description: res.data.items[0].snippet.description.replace(
						/\n|\r/g,
						''
					),
					definition: res.data.items[0].contentDetails.definition,
					duration: res.data.items[0].contentDetails.duration,
					image: res.data.items[0].snippet.thumbnails.high.url,
					stats: res.data.items[0].statistics.viewCount,
					loading: false
				})
			})
	}
	formatViews(amount) {
		return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`
	}
	formatDefiniion(kind) {
		return kind.toUpperCase()
	}
	renderVideo() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<ul className="list-reset">
					<li>{this.formatViews(`${this.state.stats}`)} YouTube views</li>
					<li>{this.formatDefiniion(`${this.state.definition}`)}</li>
				</ul>
				<div className="video">
					<noscript>
						<img src={this.state.image} alt={this.state.title} />
					</noscript>
					<iframe
						src={`https://www.youtube.com/embed/${this.props.match.params
							.video}?rel=03&ampautohide=1&ampshowinfo=0`}
						frameBorder="0"
						allowFullScreen
					/>
				</div>
			</div>
		)
	}
	render() {
		return (
			<div className="sm-flex flex-wrap center">
				<div className="sm-col-12 p2">
					<Helmet
						title={`${this.state.title}`}
						meta={[
							{ name: 'description', content: `${this.state.description}` },
							{ property: 'og:title', content: `${this.state.title}` },
							{
								property: 'og:description',
								content: `${this.state.description}`
							},
							{ property: 'og:image', content: `${this.state.image}` }
						]}
					/>
					{this.state.loading ? (
						<div className="sk-rotating-plane" />
					) : (
						this.renderVideo()
					)}
					{this.props.children}
				</div>
			</div>
		)
	}
}
Video.propTypes = {
	params: React.PropTypes.object,
	children: React.PropTypes.node
}
export default Video
