let express = require('express');
let fetch = require('node-fetch');
require('dotenv').config();


let app = express();

const rootURI = 'https://us5.api.mailchimp.com/3.0'
const myInit = {
  method: 'GET',
  headers: {
    "Content-Type": "application/json",
    "Authorization": "apikey " + process.env.MAILCHIMP_KEY
  }
}

//routes
app.use((req, res) => {
  const url = rootURI + req.originalUrl;
  fetch(url, myInit)
    .then(apiRes => apiRes.json())
    .then(body => res.send(body))
    .catch(error => console.log("Woops, ", error.message));
});

app.listen(3000, () => console.log('The proxy is listening on port 3000'));
