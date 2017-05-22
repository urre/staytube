import React from 'react'
import Header from './Header'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
      <div>
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
