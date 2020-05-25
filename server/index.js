const express = require('express');
const bodyParser = require('body-parser');
//const tagsRouter = require('./routes/tags-router');

const app = express();
const apiPort = process.env.PORT || 30000;
//const apiPort = 80;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

//app.use((req, res, next) => {
//  res.header(
//    "Access-Control-Allow-Origin",
//    "http://www.georgetownsuper8.org"
//  );
//  res.header(
//    "Access-Control-Allow-Headers",
//    "Origin, X-Requested-With, Content-Type, Accept"
//  );
//  next();
//});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log('## Launching GS8 server ##');

app.listen(apiPort, () => console.log('## GS8/FilmArchiveSrv running on port ${' + apiPort + '} ##'));

app.get('/hello', (req, res) => {
    //res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    //console.log('hello!');
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
