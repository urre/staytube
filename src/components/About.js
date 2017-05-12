import React from 'react'
import Helmet from 'react-helmet'
import GoMarkGithub from 'react-icons/lib/go/mark-github'

class About extends React.Component {
  render () {
    return (<div className='sm-flex flex-wrap mxn2'>
      <div className='col col-12 sm-col-6 mx-auto p2'>
        <Helmet title='About | Staytube' meta={[{ property: 'og:title', content: 'About' }]} />
        <h1>About</h1>
        <p>
                  Dedicated to great full length concerts. Exploring the concept of using "Youtube as a CMS". Made by <a href='https://twitter.com/urre'>Urban Sandén (@urre)</a>
        </p>
        <h3>Tools</h3>
        <ul className='list-reset'>
          <li className='block'>
          ReactJS
          </li>
          <li className='block'>
          Babel
          </li>
          <li className='block'>
          Webpack
          </li>
          <li className='block'>
          PostCSS
          </li>
          <li className='block'>
          Basscss
          </li>
          <li className='block'>
          YouTube API
          </li>
          <li className='block'>
          Surge
          </li>
          <li className='block'>
          Cloudflare
          </li>
        </ul>
        <h3>Help building Staytube</h3>
        <p>
          <GoMarkGithub size={30} color='white' style={{ marginRight: '1rem' }} /> The Source code is on <a href='https://github.com/urre/staytube'>Github.</a> <a href='https://github.com/urre/staytube/pulls'>PR:s</a> are welcome!
                </p>
      </div>
    </div>);
  }
}

export default About;
