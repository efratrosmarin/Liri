require("dotenv").config();
var keys = require ("./keys.js");
var Twitter = require("twitter");
var client = new Twitter(keys.twitterKeys)
var Spotify = require('node-spotify-api');

console.log(process.env.SPOTIFY_CLIENTID)
console.log(process.env.SPOTIFY_CLIENTSECRET)
console.log(process.env.TWITTERKEY)
console.log(process.env.TWITTERID)

var spotify = new Spotify({
  id: process.env.SPOTIFY_CLIENTID,
  secret: process.env.SPOTIFY_CLIENTSECRET
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});