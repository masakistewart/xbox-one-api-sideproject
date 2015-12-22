var express = require('express');
var app = express();
var morgan = require('morgan');
var router = require('./controllers/routes.js');


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));

app.get('/', function(req, res) {
	res.redirect('/xbox');
});

app.use('/xbox', router)
app.listen(3000, function() {
	console.log('listening on port 3000');
})
