const express = require('express')
var http = require('http');
const app = express()

app.get('/', function (req, res) {
  const https = require('https');

  https.get('https://jsonplaceholder.typicode.com/posts', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      let messages = JSON.parse(data);
      messages.forEach(function(get) {
        messages['date'] = Date.now();
      })

      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  
      res.json(messages);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})