/** reuired express**/
const express = require ('express');
/** reuired process jsondata easyly**/
const bodyParser = require ('body-parser');
/** reuired cors**/
const cors = require ('cors');
/** reuired cors**/
const morgan = require ('morgan');

/** web server build **/
const app = express ();

/** Enable packages **/
/**-_-_-_-_-_-_-_-__-_**/


/**  printout log  **/
/** log which meth and from what**/
app.use(morgan('combined'));
/** Bodyparser allow you to parse json data very easy **/
app.use(bodyParser.json());
/** any client to access **/
app.use(cors());

/**** Get request from the server on my express server **/
app.get('/status', (req,res) => {
    res.send({
        message : `Hallo this first request ! `
    })
});


/**** post request from the server on my express server **/
app.post('/register', (req,res) => {
    res.send({
        message : `Hallo ${req.body.email} ! your user was registred ! `
    })
});


app.listen(process.env.PORT || 5000);

