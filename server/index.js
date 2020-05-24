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

console.log('## Launching GS8 server ##');
db.on('error', console.error.bind(console, '** GS8 DB connection error:'));

app.get('/FilmArchiveSrv', (req, res) => {
    res.send('Hello Worldz! - GS8/FilmArchiveSrv_');
});

//app.get('/contact', (req, res) => {res.send('Hello World!');});
//app.get('/subscribe', (req, res) => {res.send('Hello World!');});
// to be handled by other sources
//app.get('/filmpurchase', (req, res) => {res.send('Hello World!')});
//app.get('/donate', (req, res) => {res.send('Hello World!')})
//app.use('/tags', tagsRouter);

app.listen(apiPort, () => console.log(`## GS8/FilmArchiveSrv running on port ${apiPort} ##`));

