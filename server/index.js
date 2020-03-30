const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ytKey = require('./youTubeAPIkey'); // See the "Accounts & Links" doc in the gs8 shared drive for instructions.
const ytOauth = require('./youTubeOauthKey'); // See the "Accounts & Links" doc in the gs8 shared drive for instructions.

const db = require('./db');
const tagsRouter = require('./routes/tags-router');

const app = express();
const apiPort = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

console.log('##Launching GS8 server');

// See the "Accounts & Links" doc in the gs8 shared drive for instructions.
if(ytKey){
    console.log('Youtube API Key: Loaded');
}
// See the "Accounts & Links" doc in the gs8 shared drive for instructions.
if(ytOauth){
    console.log('Youtube Oauth API Key: Loaded');
}

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.get('/contact', (req, res) => {
    res.send('Hello World!')
});

app.get('/subscribe', (req, res) => {
    res.send('Hello World!')
});

//to be handled by other sources
/* 
app.get('/filmpurchase', (req, res) => {
    res.send('Hello World!')
});

app.get('/donate', (req, res) => {
    res.send('Hello World!')
}) */

app.use('/tags', tagsRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));