import React from 'react'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import GoMarkGithub from 'react-icons/lib/go/mark-github'

const history = createBrowserHistory()

history.listen((location, action) => {
	ReactGA.set({ page: location.pathname })
	ReactGA.pageview(location.pathname)
})

class About extends React.Component {
	componentWillMount() {
		ReactGA.set({ page: location.pathname })
		ReactGA.pageview(location.pathname)
	}
	render() {
		return (
			<div className="sm-flex flex-wrap mxn2">
				<div className="col col-12 sm-col-6 mx-auto p2">
					<Helmet
						title={'About | Staytube'}
						meta={[
							{
								name: 'description',
								content:
									'Dedicated to great full length concerts. Exploring the concept of using Youtube as a CMS. Made by Urban Sandén (@urre)'
							},
							{ property: 'og:title', content: 'About' },
							{
								property: 'og:description',
								content:
									'Dedicated to great full length concerts. Exploring the concept of using Youtube as a CMS. Made by Urban Sandén (@urre)'
							},
							{
								property: 'og:image',
								content:
									'https://res.cloudinary.com/urre/image/upload/v1495467361/epvi1qppu4y7llo0hmmw.png'
							}
						]}
					/>
					<h1>About</h1>
					<p>
						Dedicated to great full length concerts. Exploring the concept of
						using 'Youtube as a CMS'. Made by{' '}
						<a href="https://twitter.com/urre">Urban Sandén (@urre)</a>
					</p>
					<h3>Tools</h3>
					<ul className="list-reset">
						<li className="block">ReactJS</li>
						<li className="block">Babel</li>
						<li className="block">Webpack</li>
						<li className="block">PostCSS</li>
						<li className="block">Basscss</li>
						<li className="block">YouTube API</li>
						<li className="block">Surge</li>
						<li className="block">Cloudflare</li>
					</ul>
					<h3>Help building Staytube</h3>
					<p>
						<GoMarkGithub
							size={30}
							color="white"
							style={{ marginRight: '1rem' }}
						/>{' '}
						The Source code is on{' '}
						<a href="https://github.com/urre/staytube">Github.</a>{' '}
						<a href="https://github.com/urre/staytube/pulls">PR:s</a> are
						welcome!
					</p>
				</div>
			</div>
		)
	}
}

export default About
