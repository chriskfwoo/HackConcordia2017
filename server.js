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


var productName;
var productCode;
var productDescription;

app.post('/generate', function(req, res) {

  console.log(req.body);

  // Yaas create products

  productName = req.body.product;
  productCode = req.body.code;
  productDescription = req.body.description;
  var request = require('request');

  //   request({
  //   url: 'https://api.yaas.io/hybris/oauth2/v1/token',
  //   method: 'POST', //Specify the method
  //   json: {
  //       client_id: "DhhN0a4g8IwmkSlRmwDPM78ICQwCYXPI",
  //       client_secret: "dLQf7NjyDGQ5zPk0",
  //       grant_type: "client_credentials",
  //       scope: "hybris.tenant=conuhacks17 hybris.product_create hybris.product_publish"
  //   },

  //   function(error, response, body){
  //   if(error) {
  //       console.log("error");
  //   } else {
  //       // console.log(response.statusCode, body);
  //       console.log("work");
  //   }}
  // });

  request({

    url: 'https://api.beta.yaas.io/hybris/product/v2/conuhacks17/products', //URL to hit
    //qs: {from: 'blog example', time: +new Date()}, //Query string data
    method: 'POST', //Specify the method
    headers: { //We can define headers too
        'Authorization': 'Bearer 022-18d6f179-473a-4ed0-9dc1-046bd3617920',
        'Content-Language': 'en'
    },
    json: {
        name: productName,
        code: productCode,
        description: productDescription,
        published: true
    },
    function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }}
  });
 res.redirect('/generate');
});




app.get('/generate', (req, res) =>{
  res.render('generate.hbs',{
    productName: productCode,
  });
});





app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
