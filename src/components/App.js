import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <Helmet title="Staytube | Great full length concert from YouTube" meta={ [{ property: 'og:title', content: 'Great full length concert from YouTube' }] } />
          <Header />
          { this.props.children }
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
