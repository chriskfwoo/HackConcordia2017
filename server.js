const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
var request = require('request');
// var Client = require('node-rest-client').Client;
// var client = new Client();

var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var request = require('request');
request('https://api.beta.yaas.io/hybris/product/v2/conuhacks17/products', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
//
// var productkey;
// app.post('/generate', function(req, res) {
//
//   console.log(req.body);
//
//   // Yaas create products
//
//
//   productkey = req.body.name;
//  res.redirect('/generate');
// });
//
// app.get('/generate', (req, res) =>{
//   res.render('generate.hbs',{
//     productName: productkey,
//   });
// });
//

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});



















// app.get('/', (req, res) => {
//   // res.send('<h1>Hello Express!</h1>');
//   res.send({
//     name: 'Andrew',
//     likes: [
//       'Biking',
//       'Cities'
//     ]
//   });
// });

// app.get('/about', (req, res) => {
//   res.send('About Page');
// });

// /bad - send back json with errorMessage
// app.get('/bad', (req, res) => {
//   res.send({
//     errorMessage: 'Unable to handle request'
//   });
// });
