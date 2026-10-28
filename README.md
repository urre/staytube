# Staytube

Website for [Staytube](https://urre.github.io/staytube/)

Dedicated to great full length 🎥 🎹 🎷📼 concerts on YouTube.

Hosted on GitHub Pages. Every push to `master` is built and deployed by [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which reads the YouTube API key from the `YOUTUBE_APIKEY` repository secret.

## Install

Requires Node 22.22 or later.

```
git clone https://github.com/urre/staytube.git
cd staytube
npm install
```

## Develop

Note: A `config.js` is needed with a valid YouTube V3 API Key

```
npm start
```

Then open [localhost:8080](http://localhost:8080/).
