import fs from 'fs'
import axios from 'axios'

let token = ''
const apikey = require('./../config')

fs.writeFile('../sitemap.xml', "<?xml version='1.0' encoding='UTF-8'?>\n<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>", function(err) {
	if(err) {
		return console.log(err);
	}
	console.log("Saved sitemap.xml");
});

// Loop playlist, recursively
function saveItems(token) {
	axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&pageToken=${token}&playlistId=PLUIjiNV9YTmsGucmZPzRrVR1GSlmRQ6pk&key=${apikey}&alt=json`)
	.then(res => {
		if(res.data.nextPageToken !== 'undefined') {
			token = res.data.nextPageToken

		}
	 	saveItem(res.data.items)
	})
	.then(res => {
			saveItems(token)
	})
	.catch(error =>{

	 })
}

// Save items as <loc> element in the sitemap
function saveItem(data) {
	return data.map((video, index) => {
		if(video.snippet.thumbnails) {
			fs.appendFileSync('../sitemap.xml', "\n\t<url>\n\t\t<loc>https://staytu.be/videos/"+video.snippet.resourceId.videoId+"</loc>\n</url>");
		}
  })
}

// Save items
saveItems(token)

// Note to self: Sloppy, dumb and just silly
setTimeout(function(){
	fs.appendFileSync('../sitemap.xml', "\n</urlset>")
}, 3000)
