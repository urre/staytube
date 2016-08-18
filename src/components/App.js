import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Helmet
			  title="Staytube | Great full length concert from YouTube"
			  meta={[{ property: 'og:title', content: 'Great full length concert from YouTube' }]}
				/>
				<Header />
				{this.props.children}
				<Footer />
			</div>
			);
	}
}

App.propTypes = {

};

export default App;
