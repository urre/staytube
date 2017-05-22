import React from 'react'
import Header from './Header'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
      <div>

      <Helmet title={'Latest videos | Staytube'}
        meta={[
          { name: 'description', content: 'Latest videos from Staytube' },
          { property: 'og:title', content: 'Latest videos' },
          { property: 'og:description', content: 'Latest videos from Staytube' },
          { property: 'og:image', content: 'https://res.cloudinary.com/urre/image/upload/v1495467361/epvi1qppu4y7llo0hmmw.png' }
        ]}
        />

        <div className='container'>
          <Header />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
