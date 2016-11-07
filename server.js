'use-strict'

require('dotenv').config();
let express = require('express');
let fetch = require('node-fetch');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();
let url;
const auth = "Basic " + new Buffer("apikey:" + process.env.MAILCHIMP_KEY)
  .toString("base64");
let myInit = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": auth
  }
}

const fetcher = (endpoint, settings, response) => {
  return fetch(endpoint, settings)
    .then(apiRes => apiRes.json())
    .then(body => response.send(body))
    .catch(error => console.log("Woops, ", error.message));
};

//middlewares
app.use('/api', bodyParser.json());
app.use('/api', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  next();
});
app.use(express.static(path.join(__dirname, "/dist")));

//routes

//mailchimp fetchers
app.get('/api', (req, res) => {
  url = req.query.url;
  myInit.method = 'GET'
  fetcher(url, myInit, res);
});

app.post('/api', (req, res) => {
  url = req.query.url;
  myInit.method = 'POST';
  myInit.body = JSON.stringify(req.body);
  fetcher(url, myInit, res);
});

app.listen(4000, () => console.log('The server is listening on port 4000'));
