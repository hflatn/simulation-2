const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller.js')

require('dotenv').config()

const app = express();

const session = require('express-session');

app.use( bodyParser.json() );

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

massive( process.env.CONNECTION_STRING ).then ( dbInstance =>
    { console.log("database connected")
    app.set('db', dbInstance);
})
//app.use is middleware!
//Everytime the app gets hit it runs app.use

// app.use( controller.checkForSession );


app.get('/api/getsession', controller.getSession);
app.get('/api/signout', controller.signout);
app.post('/api/loginuser', controller.login);
app.post('/api/registeruser', controller.register);
app.post('api/signout', controller.signout)

const port = process.env.PORT || 3333
app.listen( port, () => { console.log("Server Working")})

