var request = require('request');
request('http://www.omdbapi.com/?t=The+Notebook&y=&plot=short&r=json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var result =  JSON.parse(body);
    console.log(result.imdbRating);
  }
})