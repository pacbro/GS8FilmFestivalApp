const express = require('express');
const bodyParser = require('body-parser');
//const tagsRouter = require('./routes/tags-router');

const app = express();
const apiPort = process.env.PORT || 30000;
//const apiPort = 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log('## Launching GS8 server ##');

app.listen(apiPort, () => console.log('## GS8/FilmArchiveSrv running on port ${' + apiPort + '} ##'));

app.get('/hello', (req, res) => {
    //res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    //console.log('hello!');
    res.send('Hello');
});

app.get('/FilmArchiveSrv/hello', (req, res) => {
    res.send('Hello');
});

app.get('/FilmArchiveSrv', (req, res) => {
    res.send('Hello Worldz! - GS8/FilmArchiveSrv');
});






/*
//////////////////////////////////////////////////////////////////
// This version of server code is for testing basic functionality.
const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('views engin', 'ejs');
app.use('/FilmArchiveSrv/static', express.static('public'));

console.log('## Launching GS8 server ##');

app.get('/FilmArchiveSrv', (req, res) => {
    res.send('Hello Worldz! - FAS');
});

app.listen();
// this version of server code is for testing basic funvtionality.
//////////////////////////////////////////////////////////////////
*/
