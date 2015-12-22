var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('pages/index');
})
// var uidRequestOptions = {
// 	url: url + accountUID_endPoint,
// 	method: 'GET',
// 	headers: {
// 		'X-Auth': api_key,
// 		'Content-Type': 'json'
// 	}
// }

// requestModule(uidRequestOptions, function(err, response, body) {
// 	console.log(body);
// })

module.exports = router;