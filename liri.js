require("dotenv").config();
var keys = require ("./keys.js");
var Twitter = require("twitter");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var request = require('request');


var myTweets = function(){

var params = {screen_name: 'efratrosmarin'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    // console.log(tweets);
 for (var i = 0; i<tweets.length; i++){

  console.log(tweets[i].created_at);
  console.log('');
  console.log(tweets[i].text);
      }
    }
 });
}
 
var getArtistName = function(artist){
  return artist.name;
}


var getMySpotify = function(songName){
 
      spotify.search({ type: 'track', query: songName }, function(err, data) {
      if (err) {
      return console.log('Error occurred: ' + err);
    }

    var songs = data.tracks.items;
    for (var i =0; i<songs.length; i++){

      console.log(i);
      console.log(songs[i].name);
      console.log(songs[i].preview_url);
      console.log(songs[i].album.name);
      console.log('------------------------');

    }
  
      
    });

}

var getMyMovie = function(movieName){



var request = require("request");

request("http://www.omdbapi.com/?t="+ movieName+"&y=&plot=short&apikey=trilogy", function(error, response, body) {

  if (!error && response.statusCode === 200) {

    console.log("Tile: " + 
    JSON.parse(body).Title);
    console.log("Year: " + 
    JSON.parse(body).Year);
    console.log("The movie's rating is: " + 
    JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + 
    JSON.parse(body).Ratings.Source);
    console.log("Produced: " + 
    JSON.parse(body).Production);
    console.log("Language: " + 
    JSON.parse(body).Language);
    console.log("Plot: " + 
    JSON.parse(body).Plot);
    console.log("Actors: " + 
    JSON.parse(body).Actors);
    
  }
  
});

}
var fs = require("fs");

fs.readFile("random.txt", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  console.log(data);

  var dataArr = data.split(",");

  console.log(dataArr);

});


doWhatItSays = function(data) {
  fs.appendFile('log.txt', JSON.stringify(data, null, 2) + '\n====================================================================================', function(err) {
    if(err) {
      console.log(err);
    }
  });
}



var pick = function(caseData, functionData){
    switch(caseData){
    case 'my-tweets':
      myTweets(functionData);
      break;
    case 'spotify-this-song':
      getMySpotify(functionData);
      break;
    case 'movie-this':
      getMyMovie(functionData);
      case 'do-what-it-says':
      doWhatItSays(functionData);
    
    

    default:
console.log ("Liri doesn't know that");

  }

}

// var runThis = function(argOne, argTwo){

//   pick(argOne, argTwo);
// };

// runThis

(process.argv[2], process.argv[3]);