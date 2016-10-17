import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

const ReactGA = require('react-ga');
ReactGA.initialize('UA-5407647-48');

function logPageView() {
  ReactGA.set({
    page: window.location.pathname,
  });
  ReactGA.pageview(window.location.pathname);
}

render((
  <Router history={ browserHistory } onUpdate={ logPageView }>
    { routes }
  </Router>
  ), document.getElementById('main'));
