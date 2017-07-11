import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className='container'>
            <Header />
            <Main />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
