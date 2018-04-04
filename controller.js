
module.exports = {

    login: (req, res, next) => {
        const db = req.app.get('db');
        db.read_user([req.body.username, req.body.password])
            .then((userbase) => {
                console.log(userbase, " userbase info")
                
                
                req.session.user = {username: userbase[0].username, id: userbase[0].id}
                
                console.log(req.session, "session info")
                res.status(200).send(userbase)
            
            })
            .catch((err) => {
                (console.log(err, "login error"))
                res.status(500).send(res.data)
               

            })

    },

    register: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.register_user([req.body.username, req.body.password])
            .then(() => res.status(200).send())
            .catch((err) => {
                (console.log(err, "username_verify error"))
                res.status(500).send()
            })
        console.log([req.body.username, req.body.password, 'username/password info'])
    },

    signout: (req, res, next) => {
        const { session } = req;
        session.destroy()
        res.status(200).send(req.session);
    },

    checkForSession: (req, res, next) => {
        const { session } = req;

        if (!session.user) {
            session.user = { username: 'Bob', id: null }
        } 
        
        next();
    },

    getSession: (req, res, next) => {
        const { session } = req;

        res.status(200).send(session.user)
        console.log(session.user, "session res")
    },

    createListing: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { nameupdatestring, descriptionupdatestring, addressString, cityString, stateString, 
            zipString, imgUrl, loanAmountString, monthlyMortgageString, desiredRentString} = req.body
            console.log(req.session.user.id, "create listing session information")

        dbInstance.create_listing([ req.session.user.id, nameupdatestring, descriptionupdatestring, addressString,  cityString, stateString, 
            zipString, imgUrl, loanAmountString, monthlyMortgageString, desiredRentString ])
            .then( () => res.status(200).send() )
            .catch( (err) => {(console.log(err, "createlisting error"))

            res.status(500).send() } )
    }
 
}


// session.user.username = userbase.username
// session.user.username = userbase.id