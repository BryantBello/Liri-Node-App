//GLOBAL VARIABLES
var keys = require("./keys.js"); //GRABS HIDDEN KEYS
var Twitter = require('twitter'); //NODE TWITTER PACKAGE
var spotify = require("spotify");//NODE SPOTIFY PACKAGE
var fs = require("fs"); //USED TO READ random.txt FILE
var request = require('request'); //USED TO CALL OMDB SITE INSTEAD OF USING OMDB PACKAGE - WILL MODIFY
var params = process.argv.slice(2); //USE TO IGNORE FIRST TWO ARGV TO LIMIT MISTAKES



