// Load the express module (Where do you think this comes from?)
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

// original code:

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", function (request, response){
    response.render('index');
})

app.post("/result", function (request, response){
    data = {
        name: request.body.name,
        location: request.body.location, 
        language: request.body.language,
        comment: request.body.comment
    };
    response.render('result', {mydata: data});
})

app.use(express.static(__dirname + "/static"));
  // Tell the express app to listen on port 8000

app.listen(8000, function() {
    console.log("listening on port 8000");
  })
  // this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
  