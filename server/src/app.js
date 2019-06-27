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
app.use(morgan('combine'));
/** Bodyparser allow you to parse json data very easy **/
app.use(bodyParser.json());
/** any client to access **/
app.use(cors());


app.get('/status', (req,res) => {
    res.send({
        message : "hallo world"
    })
});


app.listen(process.env.PORT || 5000);

