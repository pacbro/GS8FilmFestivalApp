
const express = require('express');
const bodyParser = require('body-parser');
// Remember to remove 'cors' from package.json
const cors = require('cors');

const db = require('./db');
const tagsRouter = require('./routes/tags-router');

const app = express();
const apiPort = 3000;
//const apiPort = 80;

app.use(bodyParser.urlencoded({ extended: true }));
// Remember to remove 'cors' from package.json
app.use(cors());
app.use(bodyParser.json());
app.use('/FilmArchiveSrv/static', express.static('public'));

console.log('## Launching GS8 server ##');
db.on('error', console.error.bind(console, '** GS8 DB connection error:'));

app.get('/FilmArchiveSrv', (req, res) => {
    res.send('Hello Worldz! - GS8/FilmArchiveSrv');
});

//app.get('/contact', (req, res) => {res.send('Hello World!');});
//app.get('/subscribe', (req, res) => {res.send('Hello World!');});
// to be handled by other sources
//app.get('/filmpurchase', (req, res) => {res.send('Hello World!')});
//app.get('/donate', (req, res) => {res.send('Hello World!')})
//app.use('/tags', tagsRouter);

//app.listen(apiPort, () => console.log('## Server running on port ${apiPort} ##'));
app.listen(() => console.log('## GS8 Server is now running ##'));




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
