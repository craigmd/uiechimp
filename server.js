require('dotenv').config();
let express = require('express');
let fetch = require('node-fetch');

let app = express();
let url;
const auth = "Basic " + new Buffer("apikey:" + process.env.MAILCHIMP_KEY)
  .toString("base64");
const myInit = {
  method: 'GET',
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

//routes
app.get('/', (req, res) => {
  res.send('Hello world!');
});

//mailchimp fetchers
app.get('/api', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  url = req.query.url;
  fetcher(url, myInit, res);
});

app.listen(3000, () => console.log('The server is listening on port 3000'));
