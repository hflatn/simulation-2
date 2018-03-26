module.exports = {





get: ( req, res, next) => {
    const dbInstance = req.app.get('db');
   
    dbInstance.read_user([ ])
        .then( (username) => res.status(200).send(username) )
        .catch( (err) => {( console.log(err,"create error"))
        res.status(500).send()})
       // console.log([ username ])
},

registeruser: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
   
    dbInstance.register_user([ req.body.username, req.body.password ])
        .then( () => res.status(200).send() )
        .catch( (err) => { (console.log(err, "username_verify error"))
        res.status(500).send()} )
        console.log([ req.body.username, req.body.password, 'username/password info' ])
}
}
