const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller.js')

require('dotenv').config()

const app = express();

var session = require('express-session');

app.use( bodyParser.json() );

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

massive( process.env.CONNECTION_STRING ).then ( dbInstance =>
     { console.log("database connected")
 app.set('db', dbInstance);
})


app.get('/api/getuser', controller.get);
app.post('/api/registeruser', controller.registeruser);

const port = process.env.PORT || 3333
app.listen( port, () => { console.log("Server Working")})
