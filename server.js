var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());
var router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function() {
    console.log("Express server")
});

app.use(express.static('public'));
