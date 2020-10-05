import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import ReactGA from 'react-ga'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

const history = createBrowserHistory()
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
})

class App extends React.Component {
  componentWillMount() {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container">
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
