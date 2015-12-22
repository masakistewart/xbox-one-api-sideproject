var express = require('express');
var router = express.Router();
var requestModule = require('request');
var knex = require('../db/knex.js');
var api_key = require('../api_key.js');
var haloID = '219630713';
var rainbowSixSeigeID = '926771636';
var smiteID = '1134837784';
var url = 'https://xboxapi.com/v2/2533274809416934/game-stats/'
var forHalo = {
	url: url + haloID,
	method: 'GET',
	headers: {
		'X-Auth': api_key,
		'Content-Type': 'json'
	}
}
var forSmite = {
	url: url + smiteID,
	method: 'GET',
	headers: {
		'X-Auth': api_key,
		'Content-Type': 'json'
	}
}
var forRainbow = {
	url: url + rainbowSixSeigeID,
	method: 'GET',
	headers: {
		'X-Auth': api_key,
		'Content-Type': 'json'
	}
}

var forRainbow = {
	url: url + rainbowSixSeigeID,
	method: 'GET',
	headers: {
		'X-Auth': api_key,
		'Content-Type': 'json'
	}
}



function GetHalo() {
	return new Promise(function(resolve, reject) {
		requestModule(forHalo, function(err, response, body) {
			console.log('halo fired');
			if(err) {
				reject(err)
			} else {
				resolve(body);
			}
		})
	})
}
function GetRainbow() {
	return new Promise(function(resolve, reject) {
		requestModule(forRainbow, function(err, response, body) {
			console.log('rainbow fired');
			if(err) {
				reject(err)
			} else {
				resolve(body);
			}
		})
	})
}

function GetSmite() {
	return new Promise(function(resolve, reject) {
		requestModule(forSmite, function(err, response, body) {
			console.log('smite fired')
			if(err) {
				reject(err)
			} else {
				resolve(body);
			}
		})
	})
}
// 
router.get('/', function(req, res) {
	// Promise.all([GetSmite(), GetRainbow(), GetHalo()]).then(function(data) {
	// 	knex('userInfo').insert([{rainbowSixSeigeData: JSON.stringify(data[1])}, {halo: JSON.stringify(data[2])}, {smite: JSON.stringify(data[0])}]).catch(function(err) { console.log(err); });
	// 	console.log(data);
	// }).catch(function(err) {
	// 	console.log(err);
	// }).then(function() {
		knex('userInfo').then(function(data) {
			console.log(data);
		})
	// });
	res.render('pages/index');
})



module.exports = router;