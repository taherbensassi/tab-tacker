const AuthenticationController = require('../controllers/AuthenticationController')

module.exports = (app) => {

    /**** Get request from the server on my express server **/
    app.get('/status', (req,res) => {
        res.send({
            message : `Hallo this first request ! `
        })
    });

    /**** post request from the server on my express server **/
    app.post('/register',
       AuthenticationController.register
    )
}
