const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
var request = require('request');

var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// request('https://api.beta.yaas.io/hybris/product/v2/conuhacks17/products', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })

var request = require('request');

//Lets configure and request
request({
    url: 'https://api.beta.yaas.io/hybris/product/v2/conuhacks17/products', //URL to hit
    //qs: {from: 'blog example', time: +new Date()}, //Query string data
    method: 'POST', //Specify the method
    headers: { //We can define headers too
        'Authorization': 'Bearer 021-c1127912-41c8-429e-94d7-17db386b617e',
        'Content-Language': 'en'
    },
    json: {
        name: 'testestest',
        code: 'q1',
        description: 'blahaa'
    },
    function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }}
  });

var productkey;
app.post('/generate', function(req, res) {

  console.log(req.body);

  // Yaas create products


  productkey = req.body.name;
 res.redirect('/generate');
});






app.get('/generate', (req, res) =>{
  res.render('generate.hbs',{
    productName: productkey,
  });
});


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
