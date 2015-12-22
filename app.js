var api_key = require('./api_key.js');
var requestModule = require('request');
var express = require('express');
var morgan = require('morgan');
var router = require('./controllers/routes.js');

var url = 'https://xboxapi.com';
var accountUID_endPoint = '/v2/accountXuid';

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
