//GLOBAL VARIABLES
var keys = require("./keys.js"); //GRABS HIDDEN KEYS
var Twitter = require('twitter'); //NODE TWITTER PACKAGE
var spotify = require("spotify"); //NODE SPOTIFY PACKAGE
var fs = require("fs"); //USED TO READ random.txt FILE
var request = require('request'); //USED TO CALL OMDB SITE INSTEAD OF USING OMDB PACKAGE - WILL MODIFY
var params = process.argv.slice(2); //USE TO IGNORE FIRST TWO ARGV TO LIMIT MISTAKES

//SWITCH CASE 
switch (params[0]) {
    case "my-tweets":
        myTweets(); //CALLING TWEET FUNCTION BELOW
        break;
    case "spotify-this-song":
        if (params[1]) {
            spotifyIt();
        } else {
            spotifyIt(params[1] = "Whats my age again");
        }
        break;
    case "movie-this":
        if (params[1]) {
            findMovie();
        } else {
            findMovie(params[1] = "Mr. Nobody");
        }
        break;
    case "do-what-it-says":
        readFillCall(params[1]);
        break;


}
//myTweets FUNCTION

function myTweets() {

    //Obtained from the Twitter API DOCS PAGE
    var client = new Twitter({
        consumer_key: keys.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        access_token_key: keys.twitterKeys.access_token_key,
        access_token_secret: keys.twitterKeys.access_token_secret
    });

    client.get('statuses/user_timeline', { screen_name: 'bryant_bello', count: 20 }, function(error, data, response) {
        if (error) throw error;
        for (var i = 0; i < data.length; i++) {

            var tweetResults = data[i].text + "\n"; //REGEX FOR NEW LINE TO MAKE TWEETS MORE LEGIBLE
            console.log(tweetResults);

        };
    });
}


//SPOTIFY FUNCTION

function spotifyIt() {
    spotify.search({ type: 'track', query: params[1] }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return; //from spotify npm docs
        } else {
            var songInfo = data.tracks.items[0];
            console.log("the artist is", songInfo.artists[0].name);
            console.log("the song name is", songInfo.name);
            console.log("the album is called", songInfo.album.name);
            console.log("here is a preview link", songInfo.preview_url);

        };
    });
}
spotifyIt();


//MOVIE FUNCTION




//RANDOM FUNCTION
