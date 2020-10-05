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
                  'Dedicated to great full length concerts. Exploring the concept of using Youtube as a CMS. Made by Urban Sandén (@urre)',
              },
              { property: 'og:title', content: 'About' },
              {
                property: 'og:description',
                content:
                  'Dedicated to great full length concerts. Exploring the concept of using Youtube as a CMS. Made by Urban Sandén (@urre)',
              },
              {
                property: 'og:image',
                content:
                  'https://res.cloudinary.com/urre/image/upload/v1495467361/epvi1qppu4y7llo0hmmw.png',
              },
            ]}
          />
          <h1>About</h1>
          <p>
            Dedicated to great full length concerts. Exploring the concept of
            using Youtube as a CMS. Made by{' '}
            <a href="https://twitter.com/urre">Urban Sandén (@urre) in 2014.</a>
          </p>

          <p>
            Some React things are pretty old by now, but everything still works.
          </p>
          <p>
            <GoMarkGithub
              size={30}
              color="white"
              style={{ marginRight: '1rem' }}
            />{' '}
            <a href="https://github.com/urre/staytube">Source code on Github</a>{' '}
          </p>
        </div>
      </div>
    )
  }
}

export default About
