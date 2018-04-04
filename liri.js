require("dotenv").config();
var keys = require ("./keys.js");

var Twitter = require("twitter");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


// console.log(process.env.SPOTIFY_CLIENTID)
// console.log(process.env.SPOTIFY_CLIENTSECRET)

// console.log(process.env.TWITTER_CONSUMER_KEY)
// console.log(process.env.TWITTER_CONSUMER_SECRET)
// console.log(process.env.TWITTER_ACCESS_TOKEN_KEY)
// console.log(process.env.TWITTER_ACCESS_TOKEN_SECRET)


var params = {screen_name: 'efratrosmarin'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


 
var spotify = new Spotify({
  id: process.env.SPOTIFY_CLIENTID,
  secret: process.env.SPOTIFY_CLIENTSECRET
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});