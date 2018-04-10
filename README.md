
LIRI is a command line node app that returns tweets, song information and movie information depending on the command. When running a comand to find a movie or song title, if the title contains spaces then add quotes around the title name. Case also matters. Must be exactly as the real movie title case is.

Instructions:

Clone or download git repository.

Install Node.js with NPM ( https://nodejs.org/en/download/ ).

In your terminal run the command ( npm install ).

Get your twitter API Key and sprotify API Key 

Next create a .env file with your twitter and spotify keys.

Now you can run the following commands:

( node liri sptofiy-this-song 'Your Desired Song' )

( node liri movie-this 'Your Desired Movie' )

( node liri my-tweets )

( node liri do-what-it-says )
