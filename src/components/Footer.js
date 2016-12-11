import React from 'react';
import { Link, IndexLink } from 'react-router';

const Footer = () => {
  																				return (
    <footer className="footer">
      <div className="container">
        <div className="sm-flex flex-wrap mxn2">
          <div className="col col-12 sm-col-6 mx-auto p2">
            <nav role="navigation">
              <ul className="list-reset flex justify-center">
                <li className="mr3">
                  <IndexLink to="/">Concerts</IndexLink>
                </li>
                <li className="mr3">
                  <Link to="/about">About</Link>
                </li>
                <li className="mr3"><a href="https://twitter.com/urre">Suggest a concert?</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;

