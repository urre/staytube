require('babel-register');

const router = require('./routes').default;
const Sitemap = require('../').default;

(
	new Sitemap(router)
		.build('https://staytu.be')
		.save('./sitemap.xml')
);
